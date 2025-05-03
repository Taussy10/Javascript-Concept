
const fruits = ["Mango", "Apple", "Organge"]

// Copying in javascript

// For primtives: very straight forward casue we directly
//  tackle with values
const name1 = "Tausif"
let name2 = name1

name2 = "Resha"
 console.log(name1)
 console.log(name2)
// name1 address: @3127067
// name2 address: @3127063

// so address of name1 and name2 will be cause they point to diffrent values
// so if you change value then doesn't affect it
 


const myFruits = fruits
myFruits.push("Banana")
// The issue with this that if newly added 
// element all add in original array
// Why ? when copied address of myFruits = fruits 
// so if you change anything in myFruits then will reflect fruits
// same for fruits array
// myFruits address: @3301265
// fruits address: @3301265
// Both are same that's why if one's address changed then other's 
// array value will be changed 
// cause on address basis of address values show if 
// address pointing to diffrent value then that will show    
console.log(fruits.push("Khikhi"));

// So how to copy and change the value only 2nd object not original object's value 

// have diffrent address 
const user1 = {
    name: "Tausif",
    age: 45
}
// have diffrent address 
const user2 = {}
// Copy the values of all of the enumerable own 
// properties from one or more source objects to a target
// object. Returns the target object.

// Basically takes two params target(new) and 
// soruce(old) and returns new target object that will source object keys and values

// in user2 added user1's keys and values 
const h = Object.assign(user2, user1)
//  now if you change it will happen to only newly/target object
// cause both object will have diffrent address 
h.class = "2nd"
// added new key and user1 won't affected
console.log("User2 :",user2);

// // create a new array(works for both object and array)
// const fruity = []
// Array


// Reference types: Cause they are compare on the basis of address
//  then you have two ways


// 1. Deep copy
// 1. Shallow copy
