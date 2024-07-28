---
layout: post
title:  "Implementing a Lexer in Rust"
date:   2024-07-05 13:19:11 +0100
categories: rlox
---

I've started following Robert Nystrom's [Crafting Interpreters](https://craftinginterpreters.com/contents.html){:target="_blank"} recently. The online version of the book is free, and is very good. It starts with basics related to concepts related to a compiler, and goes on to implement a compiler from scratch. Nystrom develops the lexer in Java, and I decided to do it in Rust. Why? I've read that writing a draft compiler is miles better than following a tutorial. In fact, that applies to any other project - it doesn't have to be a compiler. Some time ago, that project was a web server for me - adding multiple endpoints that enabled CRUD functionality. But the problem with that is you tend to use a lot of libraries; for example, if you're learning Java and you choose to develop some CRUD thing like a todo list you would most likely to employ some framework (or a library) like Spring or Jakarta. Yes - you do learn traits in language out of developing such things, but it is my experience that you learn a lot about libraries that way rather than the programming language.

## Compilers

So, as we all know, compilers "translate" one level of code into another level of code. The general definition for a compiler is that it converts source code to a low-level form of code like assembly. Transpilers, are a subset of compilers that converts code written in one higher level language (e.g. JavaScript) into another higher level language (e.g. C). 

Most compilers' work run in a pipeline. That is, the compilation process follows a sequence of step that which in case on step fail, the overall compilation fails. Written below are the steps that a compiler front-end does.

1. **Tokenisation:** Also called lexical analysis, it reads your code (i.e. the "string") and groups them into tokens. In doing so, it checks whether the input string conforms to the alphabet defined by the language's [lexical grammar](https://en.wikipedia.org/wiki/Lexical_grammar). For a given input string, therefore, the lexer returns a list of tokens. 

    ```c
    int main() {
        return 0;
    }
    ```

    In converting the code above, the C compiler will recognise token groups such as `keyword` and `identifier` and return a list of lexemes. If there's code in your input that does not conform to the language's alphabet, the compilation process errs and ends here. The token groups are listed in C's [lexical grammar](https://learn.microsoft.com/en-us/cpp/c-language/lexical-grammar?view=msvc-170).

2. **Parsing:** Lexical analysis checked the conformity of the code string with the lexical grammar. The parser will check whether the given string conforms to its [syntactic grammar](https://learn.microsoft.com/en-us/cpp/c-language/phrase-structure-grammar?view=msvc-170). Syntactic grammar is specified as a set of rules, and the rules generally conform to a tree. We call the resulting tree the Abstract Syntax Tree (AST). When parsing, the parser takes the tokens returned from tokenisation and tries to develop an AST with the rules specified in the grammar. If it fails to to so, the compiler throws with a syntax error.

3. **Static Analysis:** Static analysis decorates the AST with several more information. I will write a separate article to cover this.

## Writing the Lexer

The core behind the lexer is an iterator that emits a set of tokens for a given combination of the language's alphabet. To do so, the iterator should iterate among every symbol that is contained within the given input (i.e., source code).

In implemeting the lexer, I defined the core types that are required for the lexer.

```rust
/// Token type for lexical analysis
pub struct Token<T: Debug> {
    // Type of the token. I have used `kind` here as `type` is a reserved word in Rust
    pub kind: TokenType,
    // For example, in the statement int x = 10;, there would be four lexemes: `"int"`, `"x"`, `"="`, and `"10"`.
    pub lexeme: String,
    // For many tokens, this would be None, but for literals this needs to be set as its own type (e.g. `String` for strings)
    pub literal: Option<Literal<T>>,
    // Current line number
    pub line: usize,
}
```

- `Token`: This is the type that is emitted for the symbol groups. 
- `TokenType`: An enum that represents values dictated by the lexical grammar; for instance `COMMA` represents the `,` character and `LEFT_BRACE` represents `{`. 

The iterator iterates through each character and decides which token the character is grouped under. I've used the [`Peekable`](https://doc.rust-lang.org/std/iter/struct.Peekable.html) iterators. This is mainly because I needed to peek the iteration before incrementing the iterator. For instance, take the token type `TokenType::LessEqual`. If the cursor arrives at a character `<`, it could easily be categorised into `TokenType::Less`. In order to check whether if it is `TokenType::LessEqual` or `TokenType::Less`, we need to peek the next character i.e., `=`.

The iterator, is quite simple. 

```rust
/// Returns an iterator that contains tokens of type `Token`.
/// Chained token is the EOF token that makes parsing a little easier.
/// This is not an associated function, as it does have `self` in it. This needs to be called
/// as a method. scan_tokens() takes in an exclusive reference (i.e., mut self) to the instance of Scanner
/// because there's no need to invoke any other scanner functions after the invocation of this function.
pub fn scan_tokens(mut self) -> Self {
    while !self.is_at_end() {
        let current_character = self.code_chars.next();
        if let Some(character) = current_character {
            match self.scan_individual_token(&character, self.current_line) {
                Ok(()) => (),
                Err(error) => {
                    info!("Error: {:?}", error);
                }
            }
        }
        self.current_ptr += 1;
        self.previous_char = current_character;
    }
    self
}
```

It iterates over the string until the cursor reaches its end or find an error somewhere. Note that when `scan_tokens` function is called, the scanner is moved to the argument `self`. When the function is returned, it's moved out allowing the scanner to be used after the `scan_tokens` function is done.