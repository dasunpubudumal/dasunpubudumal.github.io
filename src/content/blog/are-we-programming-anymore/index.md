---
title: "Are we writing code anymore?"
description: "My take on programming with AI."
pubDate: 2026-09-10
tags: ["ai", "programming"]
draft: false
---

AI is the hot take now. I can't remember it being this much of a hot take pre-2020. I graduated university in late 2019 (early 2020), and I'm pretty sure
ChatGPT wasn't a big thing back that time (or it was, and we were ignorant - which might as well be the case!). Everyone - and I mean *everyone* is using
AI to a certain extent. Back in the day if we had the AI tools we have now, the era would have been completely different.

One of the fields in which AI has affected the most is programming. Developers before all these AI stuff came into the picture, used the good-old StackOverflow
as the oracle. StackOverflow had solutions to many common issues we had, and even the issue is very niche, there was bound to be some inkling of a solution 
hanging around in the forum somewhere - you just need to spend some effort to find it. Apart from the horrible memory of people marking new questions as duplicates,
StackOverflow was a wonderful experience; it brought people together.

Before StackOverflow, it was the real deal. Pre-StackOverflow era is before my time (my time in programming); however, I have heard from numerous experiences that people
have shared on how problem solving worked. Problem solving, back then, was almost always a team effort. A couple or more people got together and spend time to fix the problem.
To be honest, this was our first approach as well - even living in the StackOverflow era itself; we preferred company of people first. My first entry into the software industry
was in a team made up of my own university batch-mates; therefore, we had a lot of fun working through the problems and to this day, I am incredibly proud of the things that 
we achieved. Even the late nights I remember spending to come at solutions are happy memories. And also, I am incredibly greatful to the managers (software leads) who trusted 
us to get the work done without much prior experience.

I think AI has changed a lot of this. AI harnesses like Claude Code, Codex and numerous others analyse the requirements, and perform the code generation themselves.
For example, if you have a certain task, you define what the acceptance criteria for the task is, and prompt it to one of the harnesses and almost always it is able
to generate a solution. The trick is to get the requirements and the acceptance criteria correct: this has plagued many developers over the eons, and is a problem 
that exists to this day.

---

[Terence Tao](https://en.wikipedia.org/wiki/Terence_Tao) recently published ["Mathematics in the Age of AI"](https://arxiv.org/abs/2608.16753), a fascinating analysis of how AI is reshaping mathematical practice. Reading it, I was struck by how closely 
the same tension applies to software development. In mathematics, a solution isn't accepted until it comes with a verifiable proof, written in math's universal formal language. 
In software, a solution takes the form of an algorithm, which can likewise be expressed in a formal, verifiable language: pseudocode - or, further still, actual code. I think the outputs of the paper 
can be extrapolated into the domain of software development more than we realise.

## Proof Generation vs Proof Digestion

In the paper, Tao speaks about "Proof Generation" and "Proof Digestion". This is analogous to the generation of code versus the comprehensibility of that code. We've all generated code using AI harnesses; and they almost always pass the test cases
(most of the the tests were also written by the harness!). How frequently does one think about the understandability of a particular piece of code that an AI harness has generated? That is something worthy of consideration.

Maintaining software is a hard but necessary task. "Maintainability" is one of the central tenets of good software, and all engineers strive to build products that are maintainable. But, what if there is a whole bunch of code - millions of lines - all harness generated -
go through to production and users are happy using it? The whole process of "programming" is established on the fact based on the scarcity of solutions.

### Scarcity of solutions

In economics, scarcity is usually referred to denote the fact that the resources to satisfy human needs are limited. The whole system of economics rides on the fact that the resources are scarce. This is why the concept of demand-and-supply works the way it does today.
If resources are *abundant* instead, the system would behave differently than it does now.

Assume you run a lemonade stand 🍋🍹. I can't help but to attach Oscar's basic lesson of surplus to Michael here.

<div align="center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/7Wrxqj5Rn5I?si=YOuibDfocUWO6buM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>

So, back to the lemonade stand. When the demand increases, you raise the price, because you have a *limited number of lemons* to make lemonade with (i.e., lemons are a scarce resource). Now, imagine what would happen
if you have an infinite amount of lemons. Also, assume you have infinite amounts of ingredients that you need to make lemonade, and you can spend infinite amount of time on making lemonade (i.e., infinite labour). Now, for this thought experiment, if we are taking scarcity out of the equation,
you will have to take out the fact that skill is scarce as well. This means, *anybody* can make lemonade - not just you. So, in this world where the thought experiment takes place, the price of a lemonade would drop to a 0.

See what an infinite amount of resources could do? It destroys the ability to price your lemonade, and literally brings your earnings to 0.

---

Now, that was only a thought experiment. AI does not *remove* scarcity from the equation. But it brings *abundance* in. When enough problems have been solved, if you want to solve the same problem but with different connotations attached to the problem - which makes it a bit different - AI can easily solve 
that problem. So, in theory, there is an abundance of solutions given that the AI harnesses can solve many recurring problems. What does that do to the solution that *you* developed? A lesser dystopian version of what happened to your lemonade stand. It devalues being the one who developed a solution.
