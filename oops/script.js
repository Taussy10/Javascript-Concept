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




// NOW let's go in deep of OOP
// Firstly let's talk about Objects 
// There are six ways to create objects 
// 1. Using object Literal: defining object in { }
const user = {
    firstName: "Tausif",
    lastName: "Raza",
    age: 47,
}

// using  new Object constructor ? 
// What is constrcutor(Object() is constructor function) ?
//  A special function in object that creates an object 
// it returns soemthing called this 
// start with capital case BTW Object() is built in constructor 

// Now what is new ? It needed with constcutor function 
// WHY ? It creates an emtpy object { } learn more in custom constructor function: Person() 

// Fun fact: You don't need to use new keywrod with built in constructor such Object() 
// cause under the hood javascript khud se laga deta hai 
// but you need in custom(build by you) constructors 


const person = new Object()
// added key and value in object
person.name = "Tausif"

// Then can be use 
console.log(person.name);
 

// Here is creating object using custom constructor function

// What does new keyword do ? 
// creates empty object: { }
// then store the object in this keyword: this = { }
// Now you know how to add object ? this.name = "tausif"
// and keys and values stores in object


// Why do we need to store the object in `this`? this = {}
// => Because `new Person()` creates a new empty object.
// => To add values to that object from inside the function,
//    JavaScript stores the object in `this`. keyword 
// => So when we write `this.name = "Tausif"`, 
//    we're actually adding a property to that object.

// Jaise hum normal object me add karte hai kaise ?
// store it in a variable const user = { }
// then: user.name = "Tausif" 
// here user is this 

// What is this ? this keyword refers 
// 1.to scope of that object 

// for example if it's written in object greet key so it will 
// refer to it's scope of object which is user1

// BTW refer means show/talk 

const user1 = {
    name: "Tausif", 
    greet:  function (){
    // this function inside greet so it 
    // will refer to hell() function
       console.log(this);
    }
}

// 2. In scope of global object: here we have no object so 
// it will refer to object but empty object  
// console.log(this);

// 3. This keyword refers object that is created by constructor function 


// in our 3rd case 

function Person(name, age) {
// so this is refer that object created by Person()
// like this: this = {}

// now for adding in that object add as ususal   
  this.name = name;
  this.age = age;

}

 new Person("Ravi", 22); // step-by-step above
// const person1 = new Person("Ravi", 22); // step-by-step above


// For using ooops we uses something called classes: they are use for creating objects
