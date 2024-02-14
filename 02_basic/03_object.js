// singleton
// Object.create

// object literals

const mySym = Symbol("key1")   // first declare symbol


const JsUser = {
    name: "Abhishek",
    "full name": "Abhishek Auti ",
    [mySym]: "mykey1",    //syntax- then declare in         
                                     // square bracket 
    age: 18,
    location: "Pune",
    email: "abhishek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// 2 ways to access email
    console.log(JsUser.email)
    console.log(JsUser["email"])

console.log(JsUser["full name"])
console.log(JsUser[mySym])              //access symbol

JsUser.email = "abhishek@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "abhishek@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   
                // this.==> reference the same object 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());