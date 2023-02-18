// Basic Types
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Create a variable with the type number and assign it an arbitrary value

let num: number = 33

// *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// Create a variable with the type string and use the addition operator to put two arbitrary words together

let str: string = 'Hello' + 'World'

//  *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
// Simulate a Type Error by assigning a number  to a string

str = 23

// *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
// Create a variable with the type Boolean and assign it to the logical OR operator comparing two values

let bool: boolean = true || false

// *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
// Simulate a Type Error by assigning a number to a boolean

bool = 55

// *-*-*-*-*-*-*-*-*-*-* Challenge 6 ------------------
// Get the length of an arbitrary string

let strLength = str.length
*/

// Arrays
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Create an array of numbers

let numbers: number[] = [1, 2, 3, 4, 5]

// *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// From the previously create array, access the second-indexed item

console.log(numbers[1]);

// *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
// Create an array of the two boolean values

let bools: boolean[] = [true, false, false, true, true]
*/

// Tuples
/*
//  *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Create a string type tuple

let stringTuple: [string] = ['String']

//  *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// Create a number type tuple

let numberTuple: [number] = [5]

//  *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
// Create a string and number type tuple and access the second item
let tuple: [string, number] = ['Hello', 6]
*/

// Enums
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Create an enum of product names and display it on the console

enum ProductNames {
    Kallypo = 'Kallypo',
    Rice = 'Rice',
    Biscuit = 'Biscuit'
}

console.log(ProductNames);

// *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// Create an enum of product ids and display it on the console
enum Products {
    Kallypo = 1,
    Rice,
    Biscuit
}

console.log(Products);

// *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
// Create an enum of a single favorite product detail from the two previously created enums and display it on the console
enum Kallypo {
    Name = 'Kallypo',
    Price = 'GHC 3.0',
    Type = 'juice',
}

console.log(Kallypo);
*/

// Conditionals
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Return a string “Congratulations” if a person is equal to or older than 21

let personAge: number = 20
if (personAge >= 20) {
    console.log('Congratulations');
}
*/

// Loops
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Based on the below array of search history of a user, return “Would you like to learn how to create websites for free?” if there is a keyword html or css

let searchHistory: string[] = [
    "how to make money online",
    "benefits of eating garlic",
    "html css tutorial",
    "calisthenics",
];

searchHistory.forEach(history => {
    if (history.includes('html') || history.includes('css'))
        console.log('Would you like to learn how to create websites for free ?')
})
*/

// Functions
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Create a function that returns the multiplication of two arbitrary numbers and returns a type error when passed a string

function multiply(num1: number, num2: number): number{
    return num1 * num2
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// Simulate a type error for the returned value of a function of arbitrary type

function func(): number{
    return " "
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
// Create an arrow function that returns the addition of a number and a boolean type
const arrow = (): [number, boolean] => {
    let sum = 5+5
    return [sum, true]
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
// Create a function that makes words plural by adding "s"

function plurals(words: string[]): string[] {
    return words.map(word => `${word}s`)
}

console.log(plurals(['book', 'script', 'boy', 'girl']))

// *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
// Write a function that adds or subtracts 1 from a number based on a boolean evaluation. If the boolean is true, it adds 1 otherwise subtracts 1 from the number

function boolAddition(num: number): number {
    let bool: boolean = Math.random() < 0.5
    
    if (bool) return num + 1
    
    return num - 1
}

console.log(boolAddition(0))

// *-*-*-*-*-*-*-*-*-*-* Challenge 6 ------------------
// Create a function that takes an array of numbers, then returns it. Does not change the array. If a string is passed, it throws a type error

function array(numbers: number[]): number[] {
  return numbers
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 7 ------------------
// Create a function that takes an array of tuples consisting of two properties, a name and an age. Return the names in a string array

function arrayTuples(tuples: [string, number][]): string[] {
  return tuples.map(tuple => tuple[0])
}

console.log(
  arrayTuples([
    ['Alex', 20],
    ['Yaa', 16],
    ['Dross', 66],
  ]),
)
*/
