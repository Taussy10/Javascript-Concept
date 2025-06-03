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
