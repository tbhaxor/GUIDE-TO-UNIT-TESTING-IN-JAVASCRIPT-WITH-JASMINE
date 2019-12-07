# Getting Started with Unit Testing

This is a theoritical chapter. In this you will get about the insights of unit testing and how to perform unit testing before deploying application on production environment

## What is Unit Testing

- software testing method by which **individual units** of source code are **tested** to **_ensure are fit for use_**

## Need of Unit Testing

- **evaluate** a program’s **correctness** after a change
- function as good **examples for other developers** (_when the code is undocumented or contains sparse documentation_)

## Test-Driven Development

- allows developers to **think clearly about the specifications** before their minds are clouded with the implementation details
- ensures that tests are always written

### Specs of Test-Driven Development

1. Write test cases for a **specific part** of your code. At this time these tests **should fail**
2. Your **code only serves** to make all of your tests _pass_, and nothing more
3. Once all of your tests pass, **refractor** the code

## Behavior-Driven Development

- specifications that are **small** and **easy to read**
- should be written after defining the "**behavior**" of the application

### Specs of Behavior-Driven Development

1. Your tests must be small and test one thing
2. Your tests should be sentences (for example: _`this` should do `that`_)

**NOTE:** If your test fails, you have to fix the bug
