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
/*
let employee: Employee = {
  id: 5,
  name: 'Alexander',
  retire(date) {
    console.log(date)
  },
}

let g = [true, false, false]
*/

// Type  Aliases
/*
type Employee = {
  readonly id: number, //makes value readOnly
  name: string,
  children?: string[], //optional employee attribute
  retire: (date: Date) => void
}
*/

// Intersection Types
// Deeclare an object with the same properties as the types
/*
type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable

let widget: UIWidget = {
  drag() {
      
  },
  resize() {
      
  },
}
*/

// Literal Tyoes
// Specific or exact values
// Hard coding the values
/*
let quantity: 25 | 30 = 30
*/
// Putting it in a type
/*
type Weight = 60 | 70
type Metric = 'kg' | 'g'

let weight: Weight = 60
*/

// Nullable Types
/*
function sayHello(name: String | null) {
  if (name)
    console.log(name);
  else
    console.log('Hello');
}

sayHello(null)
*/

// Optional Chaining
/*
type Customer = {
  birthday?: Date
}
*/

// Optional property access
/*
function getBirthday(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() }
}

let customerBirthday = getBirthday(1)

console.log(customerBirthday?.birthday?.getFullYear())
*/

// Optional element access
/*
let customers: Customer[] | null = null
console.log(customers?.[0])
*/

// Optional call
/*
let log: any = null
log?.('a')
*/

// Null Coalescing
/*
let speed: number = 30
let ride = {
  speed: speed ?? 50
}
*/

// Type Assertion
// Does not behave as type casting in other languages
/*
let phone = document.getElementById('phone') as HTMLInputElement

// OR

let phone = <HTMLInputElement> document.getElementById('phone')
*/

// Unknown type
// Prefered to any type because compiler forces some type checking
/*
function getOut(name: unknown) {
  if (typeof name === 'string') console.log(`Get out ${name.toUpperCase()}`)
}

getOut('Yaa')
*/

// Never Type
// Used for functions that never return
/*
function throwErr(message: string): never{
  throw new Error(message);
}

function process(): never{
  while (true){}
}
*/

// Exercises
/*
type User = {
  name: string
  age: number
  occupation?: string
}

let users: User[] = [
  {
    name: 'John Smith',
    age: 30,
    occupation: 'Software engineer',
  },
  {
    name: 'Kate Müller',
    age: 28,
  },
]

type Bird = {
  fly: () => void
}

type Fish = {
  swim: () => void
}

type Pet = Bird | Fish

type Weekday = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

let day: Weekday = 'Sunday'
*/

// Classes
// Initialising class
/*
class Account {
  //
  // make id readonly
  // readonly id: number
  // owner: string
  // Access Control
  // private _balance: number
  // 
  // optional property
  _nickname?: string

  // Parameter properties
  constructor(public readonly id: number, public owner: string, private _balance: number) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount')

    this._balance += amount
  }

  // Getter
  get balance(): number {
    return this._balance
  }

  // Setter
  set nickname(value: string) {
    this._nickname = value
  }
}

// Creating object from class
let account = new Account(1, 'Alex', 0)
account.deposit(100)

// Static members
class Ride {
  private static _activeRides: number = 0
  startRide() {
    Ride._activeRides++
  }
  stopRide() {
    Ride._activeRides--
  }

  static get activeRides(): number {
    return Ride._activeRides
  }
}

const ride1 = new Ride()
ride1.startRide()

const ride2 = new Ride()
ride2.startRide()

// Inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName)
  }
}

// Method Overriding
class Teacher extends Person {
  override get fullName(): string {
    return 'Professor ' + super.fullName
  }
}
const teacher = new Teacher('John', 'Smith')

console.log(teacher.fullName)

// Class abstraction
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void
}

class Circle extends Shape {
  constructor(color: string) {
    super(color)
  }

  override render(): void {
    console.log('Drawing circle')
  }
}

// Interfaces are used when class abstraction doesnt contain any logic
interface IShape {
  color: string
  render(): void
}

class Rectangle implements IShape {
  constructor(public color: string) {}

  render(): void {
    throw new Error('Method not implemented.')
  }
}
*/

// Exercises
/*
class Logger {
  constructor(private _fileName: string) {}
  logName(): void {
    console.log(this._fileName)
  }
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}

class Employee extends Person {
  constructor(firstName: string, lastName: string, public salary: number) {
    super(firstName, lastName)
  }
}

interface Employees {
  name: string
  salary: number
  address: Address
}

interface Address {
  street: string
  city: string
  zipCode: number
}
*/

// Generics
// Generic constraints
// function clear<T extends type/class/interface>()

// Extending generic classes
/*
interface Products {
  name: string
  price: number
}

class Store<T> {
  protected _objects: T[] = []

  add(object: T): void {
    this._objects.push(object)
  }

  // Keyof operator
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find(obj => obj[property] === value)
  }
}
*/

// Pass the genric on
/*
class CompressibleStore<T> extends Store<T> {
  compress(): void {}
}
*/

// Restrict Generic Parameter
/*
class SearchableStore<T extends { name: string }> extends Store<T> {
  search(name: string): T | undefined {
    return this._objects.find(obj => obj.name === name)
  }
}
*/

// Fix Generic Parameter
/*
class ProductsStore extends Store<Products> {
  filterByCategory(category: string): Products[] {
    return []
  }
}
*/

// Decorators
/*
function Component(constructor: Function) {
  console.log('Component decorator called')
  constructor.prototype.uniqueId = Date.now()
  constructor.prototype.insertInDOM = () => {
    console.log('Inserting the component in the DOM')
  }
}
*/

// Parameterized Decorators
/*
type ComponentOptions = {
  selector: string
}

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component decorator called')
    constructor.prototype.options = options
    constructor.prototype.uniqueId = Date.now()
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting the component in the DOM')
    }
  }
}
*/

// Decorator Composition
/*
function Pipe(constructor: Function) {
  console.log('Pipe decorator called')
  constructor.prototype.pipe = true
}

@Component({ selector: '#my-profile' })
@Pipe
class ProfileComponent {}
*/

// Method Decorators
/*
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function
  descriptor.value = function (...args: any) {
    console.log('Before')
    original.call(this, ...args)
    console.log('After')
  }
}
class Person {
  @Log
  say(message: string) {
    console.log('Person says ' + message)
  }
}

const person = new Person()
person.say('Hello')
*/

// Accessor Decorators
/*
function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.get
  descriptor.get = function () {
    const result = original!.call(this)
    return typeof result === 'string' ? result.toUpperCase() : result
  }
}
class Person {
  constructor(public fName: string, public lName: string) {}

  @Capitalize
  get fullName() {
    return `${this.fName} ${this.lName}`
  }
}
*/

// Property Decorators
/*
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string
    const descriptor: PropertyDescriptor = {
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(`${propertyName} should be at least ${length} characters long`)
        value = newValue
      },
      get() {
          return value
      },
    }

    Object.defineProperty(target, propertyName, descriptor)
  }
}
class User {
  @MinLength(5)
  password: string

  constructor(password: string) {
    this.password = password
  }
}
*/

// Parameter Decorators
/*
type WatchedParameters = {
  methodName: string
  parameterIndex: number
}

const watchedParameters: WatchedParameters[] = []

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  })
}
class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters)
*/

// Exercise
/*
function Sauce(name: string) {
  return (constructor: Function) => {
    constructor.prototype.sauce = name
  }
}
@Sauce('pesto')
class Pizza { }
*/
