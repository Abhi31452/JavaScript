//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 101
const scoreValue = 99.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

console.log(typeof anotherId);   //symbol
// const bigNumber = 3456543576654356754n


// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["Ironman", "vision", "Thanos"];
let myObj = {
    name: "Abhishek",
    age: 22,
}

const myFunction = function(){
    console.log("Hello AB ");
}

console.log(typeof heros);          //object

console.log(typeof myFunction);     //function  == object function 

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Undefined	                                                    "undefined"
// Null	                                                            "object"
// Boolean		                                                    "boolean"
// Number	                                                    	"number"
// String		                                                    "string"
// Object (native and does not implement [[Call]])	                "object"
// Object (native or host and does implement [[Call]])	            "function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be      "undefined", "boolean", "number", or "string".