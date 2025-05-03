// You have learned that you get value is assigned in code execute phase 
// But that's not true cause value's address get assigned in memory 
// not actual value

// Each varialbes get it's own unique address 
// Firstly: If you reload then address wil change 
// For example
const firstName = "Akash" // Address: @28651
// In case of number it doesn't show address directly
// so find the contenxt by search Akash then get context address 
// then search context address and get the value 

// Then when we compare two vars then through address values 
// are fetched the compare directly value
// That's why if two variable has same value then 
// they will point same address cause same value
// but if you 
const firstName2 = "AK" + "SH";
// Then will have diff address ? why cause 
// this is diff value from "Akash" cause they are created diffrently

// But in case refrence data types they are compared on the
//  basis of address why not addresss ? cause for example 
// this array can store 1000s of values so we don't want to spend
// CPU power on each value just compare address and tell the result 
// Basically due to aalaspan and kanjusi(doesn't want to 
// use computing power on each value)  


const userAge = 15   //  Address: 630395

 const name = "Singh"   // type: number
 const isGrad = false // type: boolean

