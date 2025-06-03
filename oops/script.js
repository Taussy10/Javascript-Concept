// What ?
// Object Oriented Programming(OOP) is just a programming paradigm
// what is programming paradigm ? A way/style/method of writing code  

// In Javascript we can write code with three methods 
// 1. Procedal: Code is written Step by step
// Example: Everything is happening step by step  
 let name = "John"; // name will store "John" value 
let greeting = "Hello, " + name; // then greeting will store "Hello" + storedName value 
console.log(greeting); // then greeting will console 

// Use of it ? For writing small task 


// 2. Functional:Code is organized around pure functions 
// What is pure function ? A function that returns something 
// Then we transform/change in pure function to write our code: 

// Function created then add function returning a+b 
const add = (a, b) => a + b;
// Then we are calling the function by passing params and stroing in variable
const result = add(2, 3);
// then consoling the value 
console.log(result); // 5

// What we did ? Using pure functions we wrote our code 
// It uses in React.js and React Native 


// 2. OOP: Code is organized around objects 
// Basically by changing object's key and value 
//  we write our code 

// We created object class(something)
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John");
john.greet(); // Hello, my name is John

// Where it uses? Angular.js library  
// What OOP does ? Jus like  