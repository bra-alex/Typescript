import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'

import ProductModel, { ProductDocument, ProductInput } from '../models/product.model'

async function createProduct(productDetails: ProductInput) {
  return await ProductModel.create(productDetails)
}

async function findProduct(
  query: FilterQuery<ProductDocument>,
  options: QueryOptions = { lean: true },
) {
  return await ProductModel.findOne(query, {}, options)
}

async function findAndUpdateProduct(
  query: FilterQuery<ProductDocument>,
  update: UpdateQuery<ProductDocument>,
  options: QueryOptions,
) {
  return await ProductModel.findOneAndUpdate(query, update, options)
}

async function deleteProduct(query: FilterQuery<ProductDocument>) {
  return await ProductModel.deleteOne(query)
}

export { createProduct, findProduct, findAndUpdateProduct, deleteProduct }
