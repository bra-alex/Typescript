/*
let age: number = 30
if (age < 40) {
  age += 10
}

console.log(age);
*/

// Datatypes
// Any: Any behaves like the JS initialisation of a variable
/*
let fName: any = 'Me'
fName = 2
*/

// Arrays
// Arrays without a type behave like JS arrays
/*
const marks = [1, 2, 23, '77']

const marksWithType: number[] = [1, 3, 45, 88]
const names: string[] = ['1', '3', '45', '88']
*/

// Tuples
/*
const tuple: [string, any] = ["Name", ['Array']]
*/

// Enums
// Compiler automatically assigns numbers to enum constants if they're not initialised
/*
const enum ShirtSizes {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
  ExtraLarge = 'XL',
  ExtraExtraLarge = 'XXL',
  ExtraExtraExtraLarge = 'XXXL'
}

let selectedShirtSize: ShirtSizes = ShirtSizes.ExtraLarge

console.log(selectedShirtSize);
*/

// Functions
// Types of unannotated functions are automatically inferred by return statements

// Functions with required parameters
/*
function incomeCalculator(income: number) {
  console.log(income);
} // automatically annotates to void

function calculateIncome(income: number): number {
  if (income > 60_000)
    return income * 2.5
  return income * 3.6
}
*/

// Functions with optional parameters
/*
function calculateIncome(income: number, taxYear?: number): number {
  const year: number = taxYear || 2022
  if (year > 60_000)
    return income * 2.5
  return income * 3.6
}

function calculateIncome(income: number, taxYear = 2022): number {
  if (taxYear > 60_000)
    return income * 2.5
  return income * 3.6
}
*/

// Objects
// Have to declare structure of object in type annotation
let employee: {
  readonly id: number, //makes value readOnly
  name: string,
  children?: string[], //optional employee attribute
  retire: (date: Date) => void
} = {
  id: 5,
  name: 'Alexander',
  retire(date) {
    console.log(date)
  },
}

let g = [true, false, false]