//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);// not same symbol always different 

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// **************************************/ Memory spcae allocation  /*************************************************

// stack (Premitive) and heap (non-Premitive) memory

let youtubeName = "hitesh"

let anotherName = youtubeName

anotherName = "mahesh"

console.log(youtubeName);
console.log(anotherName);

let person1 = {
    "name" : "prathamesh",
    "age" : 25
} 

let person2 = person1;

person2.age = 45;

console.log(person1);

console.log(person2);