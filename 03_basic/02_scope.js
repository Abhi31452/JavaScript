// {} ... when it comes with function or if else ...aka scope
// let ...............block scope 
// const .............block scope
// var or nothing ....global scope ...avoid using

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


// in nested function ...child function can access parent variables
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}
 
// variable ...very powerful can hold expression ,json values ,functions
// hoisting .....when variables hold function & 
// called before the initalization

addTwo(5)
const addTwo = function(num){
    return num + 2
}