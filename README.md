# Understanding Jasmine Framework

## What is Jasmine

- behavior-driven testing framework
- bunch of tools that you can use to test JavaScript code
  - matchers / assertions
  - test suites
  - specs

**Why not Test-Driven** <br>
As the code evolves, tests written in "[**Test-Driven Development**](https://github.com/tbhaxor/GUIDE-TO-UNIT-TESTING-IN-JAVASCRIPT-WITH-JASMINE/tree/chapter-1#test-driven-development)" can give false results.

The **Behavior-Driven Development** is different, as in this the testing of application is done as per the actual behavior of the system from the end users perspective.

## Setting up Jasmine

1. Download the latest bundle from the [releases](https://github.com/jasmine/jasmine/releases)
2. Unzip the code
3. [OPTIONAL] Run the `SpecRunner.html`, to see how the testing results look like

![](https://i.ibb.co/2qSCsTL/image.png)

**NOTE:** At time of publishing this course, the latest version of jasmine was `3.5.0`

## Your First Test-Driven Development

- every test begins with a `describe` function
  - also called **test-suite**
  - the parameters include
    - suite name
    - callback function
- inside every _describe_ function, there can be one or many `it` functions
  - also called **specifications**, or **`specs`** in short
  - the parameters include
    - specs name
    - callback function

The first test for hello world, is [here](https://github.com/tbhaxor/GUIDE-TO-UNIT-TESTING-IN-JAVASCRIPT-WITH-JASMINE/blob/chapter-2/codes/spec/HelloWorld.spec.js) and the function definition is [here](https://github.com/tbhaxor/GUIDE-TO-UNIT-TESTING-IN-JAVASCRIPT-WITH-JASMINE/blob/chapter-2/codes/src/HelloWorld.js). The bootstrap file is [HelloWorld.html](https://github.com/tbhaxor/GUIDE-TO-UNIT-TESTING-IN-JAVASCRIPT-WITH-JASMINE/blob/chapter-2/codes/HelloWorld.html)

![](https://i.ibb.co/cJ0Lknd/image.png)

**NOTE:** The `tobe`, `toEqual` and etc are called matcher, and will be discussed in the next lecture

## Writing Tests for The Test-Driven Development

<div style="text-align: center"> 
    <img src='https://i.ibb.co/8sTfx7x/image.png'/>
</div>

Although for bigger projects test-driven development is not used. But for a specific component of that application you can perform test-driven development.

For example, in case of developing a calculator component of a big-entriprise solution.

The key "**specs**" of the calculator would be

1. It should add 2 numbers, (both positive, one positive, both negative)
2. It should subtract 2 numbers, (both positive, one positive, both negative)
3. It should multiply 2 numbers, (both positive, one positive, both negative, 0 if multiplied by 0)
4. It should divide 2 numbers, (both positive, one positive, both negative, Infinity if denominator is 0)

The test for calculator is [here](https://github.com/tbhaxor/GUIDE-TO-UNIT-TESTING-IN-JAVASCRIPT-WITH-JASMINE/blob/chapter-2/codes/spec/Calculator.spec.js) and the functions definitions are [here](https://github.com/tbhaxor/GUIDE-TO-UNIT-TESTING-IN-JAVASCRIPT-WITH-JASMINE/blob/chapter-2/codes/src/Calculator.js). The bootstrap file is [Calculator.html](https://github.com/tbhaxor/GUIDE-TO-UNIT-TESTING-IN-JAVASCRIPT-WITH-JASMINE/blob/chapter-2/codes/Calculator.html)

![](https://i.ibb.co/SJMsvH9/image.png)

## Writing Good Tests

In theory, you could write an infinite number of tests for your code. But you don’t have unlimited time on your hands. Here are some tips to write good tests

1. **When in Doubt, Test** &rarr; If you’re not sure whether or not to test something, it probably doesn’t hurt to test it
2. Test individual components of your code, rather than everything at once.
3. When writing behavior-focused tests, you can imagine your software being a black box (You care only about the software’s behavior, not what happens internally)
