const user = {
    username: "abhishek",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "abhishek"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "abhishek"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "abhishek" 
       console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//implicit return : without { } (curly braces) we dont use return statement 

const addTwo1 = (num1, num2) =>  num1 +num2 

const addTwo2 = (num1, num2) => ( num1 + num2 )

// to return obj ...it need to be write in ()  parenthesis
const addTwo = (num1, num2) => ({username: "abhishek"})


console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8];

// myArray.forEach();