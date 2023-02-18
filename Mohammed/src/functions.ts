const enum Products {
  Sunglasses,
  Hats,
  Shoes,
}

// Function declaration
/*
function holidaySales(product: Products, sales: number, tax: number, discount: number): number {
  let price: number = 0

  switch (product) {
    case Products.Sunglasses:
      price = 29
      break

    case Products.Hats:
      price = 19
      break

    case Products.Shoes:
      price = 59
      break
  }

  let totalSalesForIndividualProducts: number = price * sales

  return totalSalesForIndividualProducts - tax * totalSalesForIndividualProducts - discount * totalSalesForIndividualProducts
}

const sunglasses: number = holidaySales(Products.Sunglasses, 20, 0.15, 0.25)

console.log(sunglasses)
*/

// Function Expressions
/*
const holidaySales = function (product: Products, sales: number, tax: number, discount: number): number {
  let price: number = 0

  switch (product) {
    case Products.Sunglasses:
      price = 29
      break

    case Products.Hats:
      price = 19
      break

    case Products.Shoes:
      price = 59
      break
  }

  let totalSalesForIndividualProducts: number = price * sales

  return totalSalesForIndividualProducts - tax * totalSalesForIndividualProducts - discount * totalSalesForIndividualProducts
}

const sunglasses: number = holidaySales(Products.Sunglasses, 20, 0.15, 0.25)

console.log(sunglasses)
*/

// Arrow functions
/*
const holidaySales = (product: Products, sales: number, tax: number, discount: number): number => {
  let price: number = 0

  switch (product) {
    case Products.Sunglasses:
      price = 29
      break

    case Products.Hats:
      price = 19
      break

    case Products.Shoes:
      price = 59
      break
  }

  let totalSalesForIndividualProducts: number = price * sales

  return totalSalesForIndividualProducts - tax * totalSalesForIndividualProducts - discount * totalSalesForIndividualProducts
}

const sunglasses: number = holidaySales(Products.Sunglasses, 20, 0.15, 0.25)

console.log(sunglasses)
*/
