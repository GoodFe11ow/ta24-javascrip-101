//global scope
const fullname = "Karl Rauniste";

//DATA TYPES
// string => "See", 'See on ka', `ja see`  
// Number (Int, float) => 22
// Boolean => true/false, jah/ei, 1/0
// const isMate = false or true
// Array => []
// Objekt => {}
// Muutujad - nimetus ja vaartus (nb: Muutumatu and muudetav)
// name files camelCase and it makes some sense

const fruit = "banan"; // var wich is non change
let model = "BMW";// var is can change

const nullableVariable = null; // null have is no value falsy

const undefindValue = undefined; //

//Koodiblokk => SCOPE
//function scope 
const calculateSum = (numb1, numb2) => {
    const numb3 = 256;
    //console.log(fullname);
    return numb1+numb2;
};

calculateSum(1, 2);

//type casting
// мы меняем числовой тип данных на строковый тип данных
const castNumber = 123456;
console.log(Number(castNumber));
console.log(Boolean(castNumber));
//array => symbol on [], имеет индексы, где начинаются с нуля
const characters = ['t','s','i', 'c', 'v', 'j', 'a', 'r', 'p'];
// console.log(characters[5]);
// console.log(characters[6]);
// console.log(characters[4]);
// console.log(characters[6]);
// console.log(characters[1]);
// console.log(characters[3]);
// console.log(characters[7]);
// console.log(characters[2]);
// console.log(characters[8]);
// console.log(characters[0]);

//loopimine => Korduslaus каждый элемент аррая проходит через скрипт

//for loop
for(i=0; i < characters.length; i++) {
    console.log(characters[i]);
}

//forEach loop
characters.forEach((char) => {
    console.log("For Each loop: ", char)
});

//for map
characters.map((char) => {
    console.log("For map: ", char)
});

/** Comparison - Vordlus
== vs === vs Object.is()
Object.is is same as ===
*/
// == compares value of both sides. As values they ar both equal: 5 = "5"
console.log(5 == "5"); //returns true

// === compares of value and data types  of both sides. number  5 is not equal to string "5"
console.log(5 === "5") //return false