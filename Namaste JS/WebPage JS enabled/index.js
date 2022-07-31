/*
@Ep.1 -> How JavaScript Works & Execution Context
1. Everything in JS happens inside an 'Execution Context',
2. It is like a big box with 2 component.
    A. Variable Environment -> Memory component.
        #Where all the variable and function stored as key-value pair.
    B. Thread of execution -> Code component.
        #Where code execute one line at a time.
3. JS is a synchronous single-threaded language.
    A. Single threaded -> Execute one command at a time.
    B. Synchronous Single threaded -> Execute one command at a time and also in a specific order.

*/

/*
@Ep.2 -> How JavaScript Code is executed? & Call Stack
4. Whene a JS program run an Execution context created.
5. Execution context created in a 2 phases
    A. Creation phase -> Memory creation phase.
        #Scane the code and allocate memory to all variable and a function in key value formate.
            Key: Variable/Function name.
            Value: Variable value (Initially it is undefine, and in execution face it assigned it's actual value if any)
                 / Function defination itself is copied to memory.
    B. Code execution phase.
        #Phase where variable assignment and function execution starts.
        #When function is executed, it will again create its Execution context.
        #Once function execution is done, it's execution context is deleted and control goes to main program.
        #First execution context is called global execution context.
6. Context execution, it's creation, control,and deletion is happen with the help of stack called call stack.
    #First pushed element is GLOBAL execution context. Next pushed element is whatever function execution happen inside the global context.
    #Once local function execution is done it's context is poped out and deleted.
7. Call stack maintains the order of execution of execution context.
    #Call stck also known as Execution context stack, Program Stack, Control stack
    runtime stack, Machine stack.
*/

//Ep.2 Hands-0n
// var n = 2;
// function square (num) {
//     var ans = num * num;
//     return ans;
// } 

// var square2 = square(n);
// var square4 = square(4);


/*
@Ep.3 -> Hoisting in JavaScript (variables & functions)
8. Hoisting is a concept due to which you can access the functions/variable even before initilize it.
9. If you create function and store it in variable, initiallin in memory creation phase it is undefined.
*/

//Ep.3 Hands-on
// getName();//Namaste Javascrript
// console.log(x);//undefined

// console.log(getName1);//undefined
// console.log(getName2);//undefined
// getName1(); //Uncaught TypeError: getName1 is not a function
// //getName2(); //Uncaught TypeError: getName2 is not a function

// var x = 7; 
// function getName() {
//     console.log("Namaste Javascript");
// }

// var getName1 = () => {console.log("Namaste Javascript");}

// var getName2 = function () {
//     console.log("Namaste Javascript");
// }

// getName();//Namaste Javascrript
// getName1();//Namaste Javascrript
// getName2();//Namaste Javascrript
// console.log(x);//7
// console.log(getName);//Print function defination
// console.log(getName1);//Print function defination
// console.log(getName2);//Print function defination


/*@Ep.4 -> How functions work in JS & Variable Environment
10. Whenever variable inside a function is accessing, first it try to find it out in it's own local memory (i.e. functions memory component).
    If it is not available it try to access it in it's parent memory component and finally in global memory component.

//Ep.4 Hands-on
// var x = 1;
// a();
// b();
// console.log(x);//1

// function a() {
//     var x = 10;
//     console.log(x);//10
// }

// function b() {
//     var x = 100;
//     console.log(x);//100

// }

/*
@Ep.5 -> SHORTEST JS Program, window & this keyword
11. Empty file is shortest JS.
12. Even for empty file JS engine will create execution context and it's component.
13. JS engine also create an global object called window (in case of browser) inisde global execution context.
14. JS engine also create an object called this at global level and at function level.
15. As global level this object points to windows object.
16. JS not only run on browser, it is running on server etc.
17. Chrome is having JS engine called V8.
18. Global space where function and variable are not inside any function/block.
19. Function/variables created inside global space are attached to global object i.e. window.
*/
//Ep.5
// console.log(window === this); //true at global level.
// console.log('a:-' + a);//Print function defination
// a();
// var a = 10; //In global space
// console.log('a:-' + a);
// a();//Uncaught TypeError: a is not a function
// function a() {
//     var x = 120;//Not in global space
// }

// console.log(window.a === a); //true
// console.log(this.a === a); //true

/*
@Ep.6 -> undefined vs not defined in JS.
20. undefine is like placeholder. It is a value which is assigned to variable when a memory is allocate to variable.
21. Not define is like no memory is allocate at all.
22. JS is loosly typed language.i.e it will not attach it's variable to any specific datatype.
23. Weakly typed is also known as loosly typed.
24. Never do a = undefined. Not a good practice.
*/
/*Ep.6*/
// console.log(a); //undefine
// var a = 7;
// console.log(x); //Not defined

// var b;
// if(b === undefined) {
//     console.log("b is undefined");
// }
// else{
//     console.log("b is not undefined");
// }

// b = 10;
// console.log(b);//10
// b = "hello world";
// console.log(b);//Hello world

/*
@Ep.7 -> The Scope Chain, Scope & Lexical Environment 
25. Scope in JS is directly related to lexical environment.
26. Scope means where you can access the specific function/variable in a code.
27. You can ask in either way. Is variable x is in scope of function a. OR What is a scope of variable x.
28. Whenever an execution context created an lexical environment is also created.
*29. Lexical environement is the local memory along with the lexical environment of its parent.
30. Lexical means in herarchy or in a sequence.
31. When execution context is created for any function it also have a refrence of lexecal environment of its parent.
32. For Global execution environment lexical environment is only its memory and its parent lexical environment is NULL.
33. To find variable defination JS engine try to find it in lexical environment of its parent and so on until variable is found or lexical environemnt is NULL.
34. The way of finding the variable described above is known as SCOPE CHAIN. It is nothing but chain of lexical environment.
*/
/*Ep.7*/
// function a() {
//     var b = 100;
//     c();
//     function c(){ //The c() lexically setting inside an a() function.
//         console.log(b); //Try to find out this in local memory space
//     }
// }

// //var b = 10;
// a();
// console.log(b); //b not defined.

/*
@EP.8 -> let & const in JS, Temporal Dead Zone
35. Let and conse introduced in ES6.
36. Are let and const declaration hoisted? -> yes but they are hoisted in different way then var declared.
37. Difference b/w Synmtex error, Type error and refrence error?
38. Let and conse are in temporal dead zone for the time being.
39. var variable assigned memory to global object.
40. let and const also have memory allocated but in different memory space (called script). (This is called hoisting)
    And this memory is not accessible untill we will assigned some value to it.
41. Temporal dead zone - It is a time since the let variable are hoisted and till the time it will initialize some value. 
42. If you accessing value in temporal dead zone, it will give you refrence error.
43. Syntax error - When problem with syntax.
44. Refrenece error - When JS engine try to find out a specific variable inside a memory space and you can not access it. 
45. Preffer to use const -> let -> var.
46. To avoide issues with temporal dead zone you should push all the initialization the valiable at the top.
    By doing this you are shrinking the temporal dead zone to 0.
*/
/*Ep.8*/
// console.log(b);//undefined
// //console.log(a); //Refrence error:- Cannot access 'a' before initialization. (it is in temporal dead zone)
// //console.log(x); //Refrence error:- x is not defined.
// let a = 10;
// let c;
// //const d;//Syntex error: Missing initializer in const declaration.
// const e = 200;
// //const b = 1000; //More strict then let, you have to declare and assign at same time.
// c = 20;
// //d = 1000;
// e = 100; //Uncaught TypeError: Assignment to constant variable.
// console.log(a); //10
// //let a = 100; //Syntax error
// //var b = 100;//var variable assigned to global object. Uncaught SyntaxError: Identifier 'b' has already beed declared. 
// var b = 1000;//var variable assigned to global object. Uncaught SyntaxError: Identifier 'b' has already beed declared. 

/*
@Ep.9 -> BLOCK SCOPE & Shadowing in JS
47. Let and const are blocked scope.
48. Block statement, also known as Compound statement.
49. Compound statement combininig multiple JS statement into one group.
50. We group multiple statement in a block, so that we can use it when JS expect a one statement.
51. 3 Memory space -> Global memory space for var, Script memory space for let and const define in global space, Block scope for let and const variable defined in block.
52. Shadowing concept is not only for block it is also for Function.
53. Whenever shadowing happen it should not cross the boundry of its scope.
54. All rule related to block scope applicable on function and also applicable for arrow function as well.
*/
/*Ep.9*/
{
}
//  Block state
//  Also known as Compound statement.
//  Combininig multiple JS statement into one group.
//  var a = 10;
//  console.log(a);
// if (true) //Syntex error -> Unexpected end of input.
// if (true) true; //No error
// if (true) {console.log('Block which grouping multiple statement in single statement.')}
// if (true) console.log('This is also true');

//Block scope -> What all variable and function access inside the block.
// {
//     var a = 10; //Hoisted inside global scope.
//     let b = 20; //Created in block scope(seprate memory scope) on local memory. 
//     const c = 30;//Cretaed in blocked scope in local memory.
//     console.log(a);//10
//     console.log(b);//20
//     console.log(c);//30
// }
// console.log(a);//10
// //console.log(b);//Uncaught ReferenceError: b is not defined
// //console.log(c);//Uncaught ReferenceError: c is not defined
// {
//     let d = 100;
// }
 
//Shadowing
// var a = 100;
// let b = 100; //In script memory
// const c = 200;
// {
//     var a = 10; //This variable shadow's the a declared above and, also modified the value above.
//     let b = 20; //Created in block scope(seprate memory scope) on local memory. 
//     const c = 30;//Cretaed in blocked scope in local memory.
//     console.log(a); //10
//     console.log(b);//20
//     console.log(c);//30
// }
// console.log(a); //10 -> Bcoz both are pointing to same memory location so value 100 override to 10
// console.log(b); // 100 //Shadowing only happening for var and not for let and const.
// console.log(c); //200

// //Shadowing in function
// var x = 100;
// const c = 100;
// function foo() {
//     var x = 30;
//     const c = 30;
//     console.log(window.c);//undefine
//     console.log(c);
//     window.x = 200;
// }
// foo();
// console.log(x);//200
// console.log(c);//100

// //Illegal shadowing
// let a = 20;
// var b = 30;
// {
//     var a = 20;//Illegal - Bcoz var is not blocked scope and we already have let a at global level.
//     let a = 20;//Legal
//     let b = 40;//Legal
// }

// //Legal shadowing bcoz both a has different boundries.
// let a = 30;
// function foo(){
//     var a = 40;
// }


//Legal Shadowing because both a has different boundries.
// const a = 20;
// {
//     const a = 20;
//     {
//         const a = 200;
//         console.log(a);//200 follow lexical scope.
//     }
//     console.log(a);//20
// }

/*
@Ep.10
55. Clouser is a function bind together with its lexical environment.
56. Clouser is a bundle of functiopn along with it's lexical scope.
57. Function are very beautiful and heart of JS.
58. When we return function form another function, the returned function still maintain there lexical scope.
59. If a function which is returned from another function and have refrence to some variable then those function will not gharbage collected.
60. Uses of Clouseres:
    -Module Design Pattern
    -Currying
    -Function like 'Once'
    -memoize
    -maintaining state in async world
    -setTimeouts
    -Iterators
    -and many more...
*/

//Ep.10 Hands-on
// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);//Here a is pointing to a's refrence and not to a initial value.
//     }
//     a = 100; 
//     return y; //This will not just only return the function but it also return it's lexical scope (i.e Clouser)
// }
// var z = x();
// console.log(z);
// //....some other line of code
// z();//7

// function z() {
//     var b = 200;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a, b);//Here a is pointing to a's refrence and not to a initial value.
//         }
//         a = 100; 
//         return y; //This will not just only return the function but it also return it's lexical scope (i.e Clouser)
//     }
//     var c = x();
//     c();
// }

// z();

/*Ep.11 -> setTimeout + Closures Interview Question
61. Like time and tied wait for none, so JS is.
62. Function in setTimeout found clouser.
63. setTimeout function take the callback function and stored it into some place and attach a timer and code proceed.
64. Once timer expire the function pushed into callstack and execute it.


*/
//Ep.11 Hands-on -> setTimeout + Closures Interview Question

function x(){
    // var i = 1;
    // for(var i=1;i<=5;i++){
    //     setTimeout(function() {
    //         console.log(i);
    //     }, i * 1000)
    // }
    // //Using let variable
    // for(let i=1;i<=5;i++){
    //     setTimeout(function() {
    //         console.log(i);
    //     }, i * 1000)
    // }
    // //Using var and clouser concept
    // for(var i=1;i<=5;i++){
    //     function close(x) {
    //         setTimeout(function() {
    //             console.log(x);
    //         }, x * 1000)
    //     }
    //     close(i);
    // }
    // This works because of block scope.
    // setTimeout(function() {
    //     console.log(i);
    // }, 3000);
    //console.log("Namaste Javascript");//This will print as soon as function x called. It will not wait for 3 sec.
}

//x();//With var it prints -> Namaste Javascript | 6,6,6,6,6
//With let it prints -> Namaste Javascript | 1,2,3,4,5
//With var and clouser function, it prints -> Namaste Javascript | 1,2,3,4,5
//With and clouser function, it prints -> Namaste Javascript | 1,2,3,4,5



/*Ep.12 -> More on Clouser
65. Disadvantages of clouser -> Over consumption of memory. Sometime variables are not garbage collected.
    Which leads to memory leak.
66. Garbage Collector -> It is like a program which free up the unutilised memory once work is done by JS engine.
67. As JS is high level programming language it is having garbage collector. C C++ don't have it.
68. Garbage collector and clouser are related.
69. Now a days JS engine is having smart garbage collection mechanism. i.e. if variable is unreachable it will garbage collect it.
*/
//Ep.12 Hands-on

//clouser example
// function outest() {
//     var c = 20;
//     function outer(b) {//b is also a part of clouser
//         //var a = 10;
//         function inner() {
//             console.log(a, b, c);
//         }
//         //var a = 10; //It still formed clouser.
//         let a = 10; //It still formed clouser. Only difference let is blocked scope, but ot dosen't affect clouser.
//         //If let a =10 is commented then it will try to find a in global scope, and print 100.
//         //If a not found in global scope, it will give refrence error. a is not defined.
//         return inner;
//     }
//     return outer;
// }

// let a = 100; //This will not make any difference
// outest()("HelloWorld")(); //Execute inner function o/p -> 10 "HelloWorld" 20
// var close = outest()("HelloWorld");
// close(); //Alternative of outer()() o/p -> 10 "HelloWorld" 20

//Clouser helps us in data hiding and encapsulation
// var counter = 0; //Need data hiding/privacy for this variable
// function inctrementCounter() {
//     counter++;//Anyone can change this counter value.
// }

// //Solution is hide count using clouser
// function counter() {
//     var count = 0; //Now this variable modified only in count function.
//     return function inctrementCounter() {
//         count++;//No one can change this counter value, except counter function
//         console.log(count);
//     }
// }

// var counter1 = counter();

// console.log(count); //RefrenceError: count is not define
// counter1();//1
// counter1();//2

// var counter2 = counter(); //Fresh counter
// counter2();//1
// counter2();//2

//counter implementation using constructor function, as above implementation is not scalable and right approach.
//What if we need to implement decrement counter as well. Constructor function is right 
// function Counter() {
//     var count = 0; //Now this variable modified only in count function.
//     this.incrementCounter = function () {
//         count++;//No one can change this counter value, except counter function
//         console.log(count);
//     }
//     this.decrementCounter = function () {
//         count--;//No one can change this counter value, except counter function
//         console.log(count);
//     }
//     //return this; if not this then it is like constructor function. and you need to use new keyword to initiate.
    
// }

// var counter3 = new Counter();
// counter3.incrementCounter();
// counter3.incrementCounter();
// counter3.decrementCounter();

// //Garbage collector and Clouser is related
// function foo() {
//     var a = 0,b = 1; //this should be garbage collected, but a is used inside foo1 it can't be garbage collected.
//     //Some advance JS engine will not store b in memory bcoz it is nowhere used and unreachable. 
//     return function foo1(){
//         console.log(a); //forms clouser
//     }
// }

// var y = foo();
// y();


/*Ep.13  -> FIRST CLASS FUNCTIONS

70. What is difference between function statement and function expression? -> Hoisting (Function expression is hoisted  i.e. you can not call function untill it is defined)
71. Anonymous Function does not have its own identity.
72. Anonymous function are used when function used as a values.
73. Ability to use functions as values. Can be passed as argument, return from another functions. This ability is known as first class function.
74. First class citizion and First class function are same.
75. If you use let and const to store function it behave as let and const behave. The variable still follow temporal dead zone concept and much more.
 
*/

//Ep.13 Hands-on
// a();//a called
// b();//TypeError -> b is not a function
// //Function Statement aka function declaration
// function a(){
//     console.log("a called");
// }
// a();

// //Function Expression
// var b = function () { //anonymous function
//     console.log("This is function assigned to variable b");
// }
// b();

//Function Declaration same as Function Statement.

//Anonymous function
/*function () { //This is Syntax error as per the EACMA specification (Function should have name)

}*/

//Named function expression
// var c = function foo() {
//     //Foo is not in outer scope.(Global scope), It is created as local variable.
//     console.log("This is named function");
//     console.log(foo);//##Print it's defination
// }
// foo();//RefrenceError: foo() is not defined.

// //Difference between Parameters and Arguments ?
//Arguments are passed to function and Params are received by fxn.
// var d = function (param1, param2) {//Parameter
//     console.log(param1 + param2);
// }
// d('Hello','JS');//Argument 

// //First class Functions (Also called first class citizens) - Ability to be used like values.
// var e = function (param) {
//     console.log("First class function");
//     param();
//     //return function xyz(){}
//     //return function() {}
// }

// e(function(){console.log("Function passed as argument")});
// function foobar(){

// }
// e(foobar);

//Arrow Function -> Introduced in ESCM 6.


/*Ep.14 -> Callback Functions in JS ft. Event Listeners

*/
//EP.14 Hands-on
//What is a callback function in Javascript
//Important to understand as callback function is used in event loop 
//When you are passing function to another function it is callback function.
//Callback function give us access to whole asynchronous world in a synchronous single threaded language.
//Callback allow us to do asuynchronous things in JS.
//Javascript is a synchronous and single threaded language.
//setTimeout(function() {console.log('timer')},500); //asynchronous operation
//setTimeout expecting a callback function.
// function x() {
//     console.log('x');
//     y();
// }
// x(function y() {
//     console.log('y');
// });
//Output:-
//x
//y
//timer
//y is callback function. It is callback because you have provided this function to x. Now it is on x when this function is called.
//Blocking the main thread
//Js is only have one call stack (main thread). Everyting is executing in the main call stack. IF anything 
//blocking the main call stack it is blocking the main thread.
//Use async operation to run long running function.
//Implement counter which is increment when button is clicked.
// function attachEventListeners() { 
//     let count = 0;
//     document.getElementById('clickMe').addEventListener('click',function xyz() {console.log('Button clicked',++count)});
// }
//attachEventListeners();

//Garbage collectionn and removeEventListeners
//Event listeners are heavy:- It takes memories with its scopes. We should be remove it if we are using it.

/*
Ep.15 -> Asynchronous JavaScript & EVENT LOOP from scratch
# JS is synchronous single threaded language.
# It have single call stack and do one thing at a time. Callstack is manage by JS Engine and code is executing in call stack.
# Global execution context.at the bottom of call stack.
# Whatever is pushed to CallStack is executed, it will not wait for anything.
# Callstack does not have timer. 
# Browser is powerfull. It has local storage, timer, htmlpage rendering, communication to external world, Bluetooth and Geo location access etc.
# Browser -> JS Engine -> CallStack.
# We need way to callstack have access to all super powwer browser have.
# Web API is the solution. setTimeout, DOM API, fetch(), localStorage, console, location. (SuperPower)
# global object helps us to get all this to callstack.
# global object is (window). You can access the superpower with window.superpower()
# setTimeout register callback function somewhere in browser (WebAPI environemnt) and started timer in browser. 
# Event Loop and Callback Queue.
# Once timer expired callback function enqueue to Callback Queue.
# EventLoop check the callback queue and dequeue the callback and pushed it to call stack.
# Event Loop is like a gate keeper.
# timer expired -> callback pushed to callback queue -> Event loop monitor callback queue -> push callback function to call stack and dequeued it from callback queue.
# For addEventListener -> JS use web API which register CB and attach an event to it in WEB API environment. 
# EventLoop -> SuperHero. One have one JOB. Contineously monitor call stack and callback queue.
# IMPORTANRT!! Eventloop only push callback function fom CB Queue to call stack if class stack is empty.
# Why do we need CB queue? Event Loop directly can directly pick form WebAPI environemnt.
# We need CB queue bcoz what if function click button multiple time. How to know how many time eventloop need to execute the function.
# how fetch() works -> Fetch goes and request for to API call. Feth function returns a promis. We also passed CB fxn which execute once promis is resolved.
# Now let say API server return data in 50ms. Now your fetch CB fxn will NOT GO to callback queue. Insted if enqueued to MicroTask Queue.
# MicroTask queue ->  Higher priority then CB Queue. 
# What are MicroTask-> Callback function through promise, mutation observer (mutation in dom tree) pushed to MicroTask queue.
# CB Queue also called Task Queue.
# Starvation of function in callback queue. -> If microTask have task keep comming and it have high priority so CB queue is starving to get event loop attention.
# 

    

*/
// console.log('Start');

// setTimeout(function() {
//     console.log('Callback');
// }, 5000);

// console.log('End');

/*Ep. 16 -> Google's V8 Architecture
# JS is Everywhere.(Browser, Server, SmartWatch and robote)
# It is possible because of JS Runtime Env.
# JS Runtime environment is having all the thing required to run JS code.
# JS Engine, API to connect to outer environment. Callback Queue, MicroTask Queue, Event Loop etc..
# Node.js is also having JS runtime environment.
# JS engine is not a machine.It is also a piece of code.
# Google V8 in C++.
# JS code as Input -> JS Engine.(Parsing -> Compilation -> Execution)
# PArsing
    @ (Code is broken down in token) -> let a = 7; let, a , = and 7 is token.
    @ Syntax Parser (take the code and convert it into Abstract Syntax Tree (AST)) kind of JSON with meta data.
    
# AST passed to compilation phase. Compilation and execution goes hand in hand.
# Just in Time Compiler.
# Interpretter -> Compile code line by line.(Fast)
# Compiler -> Whole code is compiled. And optimized version of code is generated which is executing.(Efficiency)
# JS can behave as Interpretter or Compiler depending on engine.
# Mordern JS engine can use Interpretter along with compiler. This is called JIT compiled language.
    @ AST passed to Inetrpretter. It conevrt high level code to byte code and code moved to execution step.
    @ While convertrting to byte code, it take help from compile to optimized code.
# I//n some JS engine there is something called AOT. In this compile pick code which is executing code later and optimize it in mean time.
# In Execution component is important. (memory heap and call stack)
# Garbage collector -> Free up memory space whereever possible from memory heap.
    @It use Mark and Sweep algorithm.
# Inlining, Copy elision and INline caching.
# VS8 facts:- 
    Interpretter name -> Ignitian
    Compiler name -> Turbo fan optimizing compiler
    GC Name -> Orinoco Mark and swap algorithm.
    Oilplam is one more GC.

*/ 

/*Ep. 17 -> TRUST ISSUES with setTimeout()  
#setTimeout with 0 is use to deffer the execution of piece of code.
*/
// function cb(){
//     console.log("Callback");
// }

// setTimeout(cb, 5000); //SetTimeOut dosen't always wait for 5 sec.
                     //There are trust issues
//Concurrancy model -> When Global execution context is taking long and setTimeout callback function is waiting to GE to pop-up from stack so that callback fxn can execute.
//You should not block the main thread. Bcoz if callstack is not empty it will not execute other parts.

// console.log("Start");
// setTimeout(function cb() {
//     console.log("Callback");
// }, 5000);
// console.log("End");
/*o/p-> 
Start
End
Callback*/

//Millions of code

// let startDate = new Date().getTime();
// let endDate = startDate
// while(endDate < startDate + 10000 ) {
//     endDate = new Date().getTime();
// }

// console.log("While expires");

/*o/p-> 
Start
End
While expires
Callback*/


// console.log("Start");
// setTimeout(function cb() {
//     console.log("Callback");
// }, 0);
// console.log("End");
/*o/p-> 
Start
End
Callback*/

/*Ep. 18 -> Higher-Order Functions ft. Functional Programming
#Intro to Functional Programming. (not possible without Higher Order Function)
#Functions whic takes another functions as argument or retrurn a function is Higher Order functions.
*/

// function x(){ //X is the callback functions
//     console.log("Namaste");
// }

// function y(x){//Y is the HOF
//     x();
// }

// //Beauty of Functional Program
// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//     const output = [];
//     for (let i=0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
// }

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//     const output = [];
//     for (let i=0;i<radius.length;i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
// }

// console.log(calculateCircumference(radius));                    

// const calculateDiameter = function (radius) {
//     const output = [];
//     for (let i=0;i<radius.length;i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
// }

// console.log(calculateDiameter(radius)); 

// //You should follow DRY principle.

// const area = function(radius) {
//     return Math.PI * radius * radius;
// }

// const diameter = function(radius) {
//     return 2 * radius;
// }

// const circumference = function(radius) {
//     return 2 * Math.PI * radius;
// }

// Array.prototype.calculate = function(logic) {
//     const output = [];
//     for (let i=0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
// }

// console.log(radius.calculate(area)); //More optimization

// console.log(radius.map(area));

/* EP.19 -> map, filter & reduce 
#This are higher order function.
#Map function is to transform the array.
#

*/
//const arr = [5, 1, 3, 2, 6];
//double [10, 2, 6, 4, 12]
//tripple [15, 3, 9, 6, 18]
//Binary ["101", "1", "11", "10", "110"]
// function double(x){
//     return x * 2;
// }

// function tripple(x){
//     return x * 3;
// }

// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map(binary);//create new array
// console.log(output);
