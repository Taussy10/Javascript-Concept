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

// THERE ARE SIZ WAYS TO CREATE OBJECTS 

// 1. USING OBJECT LITERAL: defining object in { }
const user = {
    firstName: "Tausif",
    lastName: "Raza",
    age: 47,
}

// 3. USING NEW OBJECT CONSTRCUTOR ? 

// What is constrcutor ?
//  A special function that creates an object 
// and automatically returns that object
// start with capital case BTW Object() is built in constructor 

// Now what is new ? It is needed to create constcutor function  
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
// creates empty object: { } NOT THE CONSTRUCTOR FUNCTION(CAUSE funciton is pice that we 
// have to call it for using but if we use it with new keyword then it will create object )


// 3. USING CUSTOM CONSTRUCTOR FUNCTION  


function Person2(name, age) {

// so this KEYWORD WILL REFER TO THAT  OBJECT  created by Person2()
// why ?for more see this.js file 
// like this: this = {}

// now for adding in that object add as ususal   
  this.name = name;
  this.age = age;

}

 new Person2("Ravi", 22); // step-by-step above



// 3. CREATING OBJECT USING CLASS(MODERN WAY IN OOP)
// in 2015 class syntax were introduced to create it 


class Person3 {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}

const he = new Person3("Tausif",48)
console.log("he :", he);
