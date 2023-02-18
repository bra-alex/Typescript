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

