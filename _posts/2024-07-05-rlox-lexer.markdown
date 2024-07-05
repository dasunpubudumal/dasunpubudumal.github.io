---
layout: post
title:  "Implementing a Lexer in Rust"
date:   2024-07-05 13:19:11 +0100
categories: rlox
---


Recently, I've started learning a bit of Rust, here and there, in my spare time. I work full time with Ruby and Python (I used to do a lot of Java as well). One of the true regrets that I have in my career (short career; I started programming professionally - people call it "Software Development" - in 2020) is that I never started out, or got to use C/C++ professionally, or even for my own projects. I was introduced to Python when I was in my university for a module on introduction to programming. I knew some Java before that, only to run probably the simplest command-line calculator. 

I had heared about Rust before. As probably everyone did, I had heard of it as a "systems programming language". I had heard that it was fast, and more importantly, I had heard that it requires a different style (is it _style_? I'm not entirely sure) of programming. So, I got involved in one of the projects that is in its early stages, in Rust. It was **not** in any way related to a compiler, but it got me started off with Rust.

## Why Rust?

Programming expressions are eventually converted into instructions (a command) that the programmer provides to the CPU. Each of these instructions is first loaded into memory, then are taken into registers (although not all at once), and are executed by the CPU. For each of these instructions, therefore, we need some amount of memory to store them. Take a very simple function written in Java.

```java
public class MyClass {
    public int increment(int number) {
        return ++number;
    }
}
```

The variable `number` is of type `int`. This is a primitive type in Java. When you invoke the function `increment` (say, in the `main` method), it will _copy_ the number you want to increment, increment the number, and return the incremented number to you. Now, what happens to your initial number? It is still there _without any mutation on it_. When the calling function is popped off from the stack, the primitive value is also popped off.

```java
class SomeType {
    // some functions inside this
}

public class MyClass {
    public int doSomething(SomeType someObject) {
        // Do something with someObject
    }
}
```

The behavior is a bit different when you use custom types, such as `SomeType`. When you pass a variable that refers to `someObject` into `doSomething` function, that reference is copied, but the resulting copy of the reference still points to the object in memory. Unlike primitive types, custom types live on the heap, and are not part of the stack to be popped off when the calling function's activation record (stack frame) is popped off. It lives on the heap until some form of cleaning reclaims that memory by cleaning that object out from memory.

One option is to use some cleaning strategy like [Reference Counting](https://en.wikipedia.org/wiki/Reference_counting){:target="_blank"}. Everytime an object is being referred, the reference count associated to the object increases. And more importantly, when each reference is popped off, the count is decremented by one. When the count reaches 0, the corresponding object is immediately removed from heap and the memory reclaimed. Another very popular strategy is [Tracing Collectors](https://en.wikipedia.org/wiki/Tracing_garbage_collection){:target="_blank"}, where algorithms such as [Mark and Sweep](https://www.cs.odu.edu/~zeil/cs330/f13/Public/garbageCollection/garbageCollection-htmlsu5.html){:target="_blank"} takes place; you mark every reachable object from a GC (Garbage Collection) root, and claim the unmarked ones later on in a GC cycle. 
