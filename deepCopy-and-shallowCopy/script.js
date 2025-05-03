
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


// This assign is old method 
// we got new method called spread operator: as the name suggest 
// spread the source object then add it {} then in newly object 
// add/remove/update whatever you want cause it will have diff address 
// so no affect on sourece object 
const user3 = {...user1, name:"Kingy" ,class: "2nd"}


// For copying array use same as object.assing() and spread

// Object.assign(): Will work on array cause array are just object
// Create empty array
const arr1 = []
Object.assign(arr1, fruits)
// Now all data in  arr1 all the fruits 
// now you can do operatorion arr1 that won't affect on fruits array

// by spred operator

const arr2 = [...fruits, "Logoto"]

// this object.assign() and spred operator methods 
// copying called shallow copy

// But shallow copy objects have problem 
// they won't work if there are nested object/array

// Why cause nested1 will have diff address
// but CS will have same address if you try to copy 
// cause when you use both(assign and sperad) the 
// new object created only for flatten values(name, age)

const nested1 = {
    name: "Tausif",
    age: 45,
    sub: ["CS", "Chemistry"]
}
// convert them in string now due to it's a primtive type
// so it won't have won't have any address(basically one one address of jsonString)
const  jsonString = JSON.stringify(nested1)  

// convert back to object and new address will create jsonObject
const  jsonObject = JSON.parse(jsonString)  


// Reference types: Cause they are compare on the basis of address
//  then you have two ways


// 1. Deep copy
// 1. Shallow copy
