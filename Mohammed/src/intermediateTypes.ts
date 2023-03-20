// Index signature
// Any properties that come in the declaration of the signature must be the same as the signature
/*
type Product = {
  [key: string]: string
  banku: string
}
*/

// Indexed access types
// Can only use bracket notation

// Partial Types
// Makes all properties optional

// Can be done like this
/*
interface Car {
  readonly id: number
  model: string
  make: string
  year: number
  bhp: string
  torque: string
  color: string
  drivetrain: string
}

const partialCar1: Partial<Car> = {}
*/
// OR
/*
type PartialCar = Partial<{
  readonly id: number
  model: string
  make: string
  year: number
  bhp: string
  torque: string
  color: string
  drivetrain: string
}>

const partialCar2: PartialCar = {}
*/

// Readonly Types
// Makes all types readonly
// Can be declared this way
/*
const readOnlyCar1: Readonly<Car> = {
  id: 1,
  model: 'M5 CS',
  make: 'BMW',
  year: 2022,
  bhp: '627hp',
  torque: '553nm',
  color: 'Green with gold accents',
  drivetrain: 'AWD/RWD',
}
*/

// OR
/*
type ReadOnlyCar = Readonly<{
  readonly id: number
  model: string
  make: string
  year: number
  bhp: string
  torque: string
  color: string
  drivetrain: string
}>

const readOnlyCar2: ReadOnlyCar = {
  id: 1,
  model: 'M5 CS',
  make: 'BMW',
  year: 2022,
  bhp: '627hp',
  torque: '553nm',
  color: 'Green with gold accents',
  drivetrain: 'AWD/RWD',
}
*/

// Readonly Arrays
// Disables methods that change the structure and values in an array
/*
const numbers: ReadonlyArray<number> = [2, 5, 9, 4]
*/

// Shared Fields
// Can declare a type with the common fields and then use an intersection in the declaration of the types
/*
type DigitalProduct = {
  name: string
  price: number
}

type Product = DigitalProduct & {
  type: string
  released: boolean
}

type Course = DigitalProduct & {
  level: string
  completed: boolean
}

type OnlineProduct = Product | Course

let product: OnlineProduct = {
  name: 'Tomato',
  price: 2.55,
  type: 'Perishable',
  released: false,
}

console.log(product)
*/

// OR it can all be declared in a single type and separated with union types

type DigitalProduct = {
  name: string
  price: number
} & (
  | {
      type: string
      released: boolean
    }
  | {
      level: string
      completed: boolean
    }
)

let product: DigitalProduct = {
  name: 'Tomato',
  price: 2.55,
  type: 'Perishable',
  released: false,
}

console.log(product)
