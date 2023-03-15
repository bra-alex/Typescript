// Arrays
// Syntax: Array<type>
/*
const numArray: Array<number> = [0]
const stringArray: Array<string> = ['0']
const boolArray: Array<boolean> = [false]
const nestedArray: Array<Array<number>> = [[0]]
const mixedArray: Array<number | string> = [0, '0']
*/

// Functions
// Syntax: function functionName<T>(parameter: T): T
/*
function getName<T>(name: T): T {
  return name
}

type User = {
  name: string
  age: number
  title?: string
}

let user: User = {
  name: 'Me',
  age: 22,
}

let userName = getName<string>(user.name)

console.log(userName)
*/

// Objects
/*
Syntax:
1. type Type<T> = {
    property: T
}

2. type Type <T1, T2, ..., TN> = {
    property1: T1
    property2: T2
    propertyN: TN
}
*/

/*
type User<T1, T2> = {
  name: T1
  age: T2
  title?: T1
}

let user: User<string, number> = {
  name: 'Me',
  age: 22,
}

type Name<T> = {
  name: T
  title: T
}

let fullName: Name<string> = {
  name: 'Alexander',
  title: 'Mr',
}
*/

// Generic inference
/*
function getName<T>(name: T): T {
  return name
}

type User = {
  name: string
  age: number
  title?: string
}

let user: User = {
  name: 'Me',
  age: 22,
}

let userName = getName(user.name)

console.log(userName)
*/

// Generic function type
// Syntax: type Type<T> = (parameter: T) => T
/*
type FuncType<T> = (user: T) => string

type User = {
  name: string
  age: number
  title?: string
}

let user: User = {
  name: 'Me',
  age: 22,
}

let userName: FuncType<User> = user => {
  return user.name
}

console.log(userName)
*/
