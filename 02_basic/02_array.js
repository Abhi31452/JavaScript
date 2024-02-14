const marvel_heros = ["Black Panther", "Ironman", "captain america"]
const dc_heros = ["Batman", "aquaman", "superman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);             //array inside array
console.log(marvel_heros[3][1]);      //aquaman

marvel_heros.pop(dc_heros)

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

console.log(marvel_heros);   //['Black Panther', 'Ironman', 'captain america']

const all_new_heros = [...marvel_heros, ...dc_heros]


console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Abhishek"))      //false
console.log(Array.from("Abhishek"))        //character array

console.log(Array.from({name: "abhishek"}))  //[] // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300]