
// In const and let 
// memory is creating but you can't 
// acces before intializtion(writtencode)

// That's why used var: just to see in MCP 
// debugger


console.log( firstName);



// Firstly on debugger
// These let const will go to script scope 
// Var will go to global scope 
var firstName = "Akash"

const lastName = "Singh"
let age = 15
const yearOfBirth = 1995

let userIntro = "Hi, my name is " + firstName + " " + lastName;

console.log(userIntro);

const hello = () => {
    console.log("Hello");
    
}

// There is something called breakpoint: when you use breakpoint then refresh 
// then code will stop there then you can see how code is executing step by step 
// In vscode you don't need to set debugger in chrome just use 
// debugger keyword in your code

hello()