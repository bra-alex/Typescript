// Function type
// Declared in two ways
// 1.
let fullName: Function

fullName = (fName: String, lName: String): string => {
  return `${fName} ${lName}`
}

console.log(fullName('Alexander', 'Boakye'))

// 2.
let getMilliSeconds: (date: Date) => number

getMilliSeconds = date => {
  return date.getMilliseconds()
}

console.log(getMilliSeconds(new Date()))
