enum Courses {
  HTML,
  CSS,
  JS,
  Bun,
  Swift,
}

function setCoursePrices(course: Courses) {
  switch (course) {
    case Courses.HTML:
      return 33.5
    case Courses.CSS:
      return 16.55
    case Courses.JS:
      return 10.99
    case Courses.Bun:
      return 9.0
    case Courses.Swift:
      return 3.0
    default:
      priceWarning(course)
  }
}

function priceWarning(course: never): never {
  throw new Error(`${course} price not set`)
}
