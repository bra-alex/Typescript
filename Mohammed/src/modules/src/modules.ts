function getProductName({ productName }: { productName: string }): string {
  return productName
}

const course = {
  name: 'TS',
  price: 10.99,
}

export { course, getProductName }
