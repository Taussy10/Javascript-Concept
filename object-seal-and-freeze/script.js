
// As we know that const is for constant we can't change the value 
// of const varaibles 

// What? In this we have declared object(Ref types) using const can we
// change the value ? Yes but why 

// For why? for curiosity 
// For how? user.firstName = "Tausif"
const user = {
    firstName: 'Adarsh', // @13591
    lastName: 'Singh',
    pata: {
        city: 'Bangalore',
        pinCode: 876876,
        state: 'Karnataka',
        moreDetails: {
            population: 9798897897,
            area: '787 sq km',
        },
    },
    age: 15,
    isGraduate: false,
}

//  user.firstName = "Tausif" // @333993

// So to answer the question firstly firstName was pointing toward 
// @13591 then it pointed @333993 and both addresse had diffrent value 
// so it showed that value 

// BTW even the value is same new address will be created and that 
// will point to that address's value 

// Diff address but same value only addressed changed value changed
// but value is "Adarsh" so you may think value didn't changed 
// but that's not true
 user.firstName = "Adarsh" // @1354385


//  When you add new key in object then object's 
// addresses changes from previous one 
 user.class = "1st" // @182 2413
 user.isGrad = false // @1862414 

//  if try to changed on the basis of name of object 
// then you will get error  
// user = { }

// so create object using let 

// Initial Address:  @2675729
let obj1 = {
    name: "Tausif"
};
// Then if you try to change object's value 
// then values will changed also it's address
// Address changed: @2936059 
obj1 = {};

// How to delete object's keys use delete keyword
// it returns boolean value whether deleted or not
// delete user.firstName;

// what if you want to protect object(no addition of keys or deletion) ? 
// seal it 
Object.seal(user)

// Naah it won't work 
// delete user.firstName; // will return false cause not deleted 

// But the problem object.seal() is that you can 
// stil change the existing keys value
// user.firstName = "Muskan";
// so use object.freeze(): Same as object.seal() 
// with no existing keys can't change 

Object.freeze(user)
 user.firstName = "Ayush";
// console.log(user)

// "in" keyword for checking does that key present in object or not 
// returns boolean also it's case dependent 
const includes = "firstName" in user 
console.log(includes);


