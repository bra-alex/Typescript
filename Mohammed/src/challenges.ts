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

// Basic Types
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
// Write a function that can accept number, string and boolean as argument types and returns a string type
let fxn: (n: number, s: string, b: boolean) => string

fxn = (n, s, b) => {
  return `${n} is ${s}, ${b}`
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
// Write a function that returns an inverted boolean value
let inverter: (bool: boolean) => boolean

inverter = bool => {
  return !bool
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
// Write a function that adds 1 to a number, subtracts 1 from a number or does nothing to a number based on a condition. First argument is a number and second argument is either “add”, “subtract” or “do nothing”

type Condition = 'add' | 'subtract' | 'do nothing'

let changeNum: (num: number, condition: Condition) => number

changeNum = (num, condition) => {
  if (condition === 'add') {
    return num + 1
  }

  if (condition === 'subtract') {
    return num - 1
  }

  return num
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Create an object type that has 3 properties (name, age, job) and create an object from this type
type Employee = {
  name: string
  age: number
  job: string
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// Access the published property from the following object using the bracket notation and the dot notation

type OnlineCourse = {
  name: string
  platform: string
  features: string[]
  'meta-data': {
    published: boolean
  }
}

let myCourse: OnlineCourse = {
  name: 'TS Bootcamp',
  platform: 'Udemy',
  features: ['Practical', 'Exercise Oriented', 'Modern TS Concepts'],
  'meta-data': {
    published: true,
  },
}

myCourse['meta-data'].published

// *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
// Fix the error in the following code by modifying the type Product. Do not make changes to the product1 or product2 objects

type Product = {
  name: string
  publishedStatus?: boolean
}

const product1: Product = { name: 'TS Bootcamp' }
const product2: Product = { name: 'TS Bootcamp', publishedStatus: true }

// *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
// Create a product type and add a holidaySales method that return a string “Sale is On”. Finish by creating an object from the type and logging the string on the console

type Product = {
    holidaySales(): string
}

let sales: Product = {
    holidaySales() {
        return 'Sale is On'
    },
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Write a function that takes a literal object with one property of name and simply returns the name

function getName({ name }: { name: string }): string {
  return name
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// Write a function that takes an object type with one property of online (type boolean) as argument and simply returns the whether the user is online or offline
function userOnline({ online }: { online: boolean }): string {
  if (online) {
    return 'user is online'
  }
  return 'user is offline'
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
// Create a function that produces a value based on the following conditions

// 1--------- If the argument passed is a string containing a number, it should return the number

// 2---------If the argument passed is a string not containing a number, it should return undefined

// 3---------If the argument passed is undefined, it should return undefined

function toInt(number: string | undefined): number | undefined {
  if (number) {
    const num = parseInt(number)
    if (num) return num
  }
  return undefined
}
*/

// Generics
// Array
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Create a generic array of strings and pass some items
let strArray: Array<string> = ['', '']

// *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// Create a generic array of the two boolean values
let twoBool: Array<boolean> = [true]

// *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
// Create a generic array that is an array of an array of strings
let strNestedArray: Array<Array<string>> = [['']]

// *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
// Create a function whose return type is a generic array of numbers. Add some values as well.
function numArray(...values: number[]): Array<number> {
  return values
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
// Create a function whose return type is a generic array of array of numbers. Add some values as well.
function nestedNumArray(...values: number[]): Array<Array<number>> {
  return [values]
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 6 ------------------
// Create a function whose return type is a generic array of array of strings. Add some values as well.
function nestedStrArray(...values: string[]): Array<Array<string>> {
  return [values]
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 7 ------------------
// Extract the value  “TS” from the following generic array

let someArr: Array<Array<Array<Array<string | number>>>> = [[[[1, 2], ['C#'], ['JS', 'Java'], ['HTML', 'CSS', 'TS']]]]
let [[[, , , last]]] = someArr

console.log(last[last.length - 1])
*/

// Function
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Write a generic function that simply returns its argument. Test with several types
function returnArg<T>(arg: T): T {
  return arg
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// Write a generic function that returns the length of an array. Test with several types
function getArrayLength<T>(array: T[]): number {
  return array.length
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
// Write a generic function which accepts an array of strings returning the 5th item
function returnString<T>(elements: T[]): T {
  return elements[4]
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
// Write a generic function that accepts a generic array returning the last item of the array
function returnArr<T>(elements: Array<T>): T {
  return elements[elements.length - 1]
}
*/

// Objects
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Create a generic object type for an air conditioner with 2 properties that can only accept one specific type
type AirConditioner<T> = {
  name: T
  hp: T
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// Create a generic object type for a smartphone with 3 properties that can accept any type of value. Finally, store the object property values in an array
type Smartphone<T> = {
  name: T
  type: T
  ram: T
}

let smartphones: Array<Smartphone<string | number>> = [{ name: 'iPhone 14 Pro', type: 'Smartphone', ram: 6 }]
*/

// Type Narrowing
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Write a function that handles whether a product is viewed or not. If the product is viewed once or more, the function returns true. If the view count is zero, the function returns false. The function is invoked only with either the number of times the product was viewed or the boolean true value.

type Product = {
  viewCount: number
}

function productViewed(product: Product): boolean {
  if (product.viewCount >= 1) {
    return true
  }
  return false
}

function viewProduct(view: number | boolean) {
  if (typeof view === 'boolean' && view) {
    productViewed({ viewCount: 1 })
  } else if (typeof view === 'number' && view > 1) {
    productViewed({ viewCount: 3 })
  }
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// Create a function that returns the first item of an array. The function must accept either a generic array or a single item irrespective of type. If a single item has been passed, then the function simply returns the item.

function returnItem<T>(item: T | T[]): T {
  if (Array.isArray(item)) {
    return item[0]
  }

  return item
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
// Create a function that accepts a single employee object with only one property of name (created with an object type) or an array of employee objects created with the same object type. If an object is passed, it returns the value of the name property, if an array is passed, it returns the array length
type Employee = {
  name: string
}

function returnEmployeeName(employee: Employee | Employee[]): string | number {
  if (Array.isArray(employee)) {
    return employee.length
  }

  return employee.name
}
*/

// Object Narrowing
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Create an Employee type with name as string, position title as string, age as number and hired as boolean types. Create an instance of the object type with an employee info. Then create another type narrowed to only the employee names.
type Employee = {
  name: string
  position: string
  age: number
  hired: boolean
}

let employee: Employee = {
  name: 'Jobless Lunatic',
  position: 'Unemployed',
  age: 25,
  hired: false,
}

type EmployeeName = {
  name: string
}

let employeeName: EmployeeName = employee
*/

// Index signatures
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// Create an index signature that map a product’s name (a string) to a price (a number or undefined). Finally create an object from the type
type Product = {
  [name: string]: number | undefined
}
*/

// Indexed access
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Create a Product type with name and prices members (prices is an array of numbers). Then index into it with a ProductPrices type. Finally create an array of prices and log it
type Product = {
  name: string
  prices: number[]
}

type ProductPrices = Product['prices']

const productPrices: ProductPrices = [25.0, 66.59, 63.3]

console.log(productPrices)
*/

// Enums Deep Dive
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
// Create a group of five constants for five products of your choice and initialize the enum with 1

const enum Products {
  Rice,
  Apples,
  Yam,
  Plantain,
  Cocoyam,
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
// Perform an exhaustiveness checking for the previous enum and return their prices

function priceProduct(product: Products) {
  switch (product) {
    case Products.Rice:
      return 50
    case Products.Apples:
      return 10
    case Products.Yam:
      return 15
    case Products.Plantain:
      return 15
    case Products.Cocoyam:
      return 10
    default:
      productWarning(product)
  }
}

function productWarning(product: never): never {
  throw new Error(`${product} has no price!`)
}
*/

// OOP
// Classes
/*
// *-*-*-*-*-*-*-*-*-*-* Challenge 7 ------------------
// Create a product class with 2 properties, name and number of students. Add a method to this class that would return the string “Best Seller” if a course has equal to or more than 3000 students, otherwise, it should print “Not so much”

// *-*-*-*-*-*-*-*-*-*-* Challenge 8 ------------------
// Write a function that sets the price of a course and takes either a number or undefined. If undefined is passed, it returns a price of 9.99 otherwise it returns the given price

class Product {
  constructor(public name: string, public numOfStudents: number) {}
  getRanking(): string {
    if (this.numOfStudents >= 3000) return 'Best Seller'
    return 'Not so much'
  }
  setPrice(price: number | undefined): number {
    if (!price) {
      return 9.99
    }
    return price
  }
}

// *-*-*-*-*-*-*-*-*-*-* Challenge 13 ------------------
// Create a Product class with a name property and a holidaySales method that return true. Then create an interface called ProductInfo that extends the class that includes a price property of type number. Finally create an object from the interface and log the object

class Product {
  constructor(public name: string) {}
  holidaySales(): true {
    return true
  }
}

interface ProductInfo extends Product {
  price: number
}

const productInfo: ProductInfo = {
  name: 'Name',
  price: 300,
  holidaySales() {
    return true
  },
}

console.log(productInfo)
*/
