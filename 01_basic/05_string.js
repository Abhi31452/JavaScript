// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


const name = "Abhishek"
const repoCount = 33

// console.log(name + repoCount + " Value");                                   // old way of writing 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);     // String iterpolation technique....injaect variables using ..${var1}..

const gameName = new String('abhi-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));