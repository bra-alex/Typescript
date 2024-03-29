import { Request, Response } from 'express'

import {
  CreateProductInput,
  DeleteProductInput,
  GetProductInput,
  UpdateProductInput,
} from '../schema/product.schema'
import {
  createProduct,
  deleteProduct,
  findAndUpdateProduct,
  findProduct,
} from '../service/product.service'

async function createProductHandler(
  req: Request<{}, {}, CreateProductInput['body']>,
  res: Response,
) {
  const userId = res.locals.user._id
  const body = req.body

  const product = await createProduct({
    ...body,
    user: userId,
  })

  return res.status(200).json(product)
}

async function getProductHandler(req: Request<GetProductInput['params']>, res: Response) {
  const productId = req.params.productId

  const product = await findProduct({ productId })

  if (!product) return res.sendStatus(404)

  return res.status(200).json(product)
}

async function updateProductHandler(
  req: Request<UpdateProductInput['params'], {}, UpdateProductInput['body']>,
  res: Response,
) {
  const userId = res.locals.user._id
  const update = req.body
  const productId = req.params.productId

  const product = await findProduct({ productId })

  if (!product) return res.sendStatus(404)

  if (String(product.user) !== userId) res.sendStatus(403)

  const updatedProduct = await findAndUpdateProduct({ productId }, update, {
    new: true,
  })

  return res.status(200).json(updatedProduct)
}

async function deleteProductHandler(req: Request<DeleteProductInput['params']>, res: Response) {
  const userId = res.locals.user._id
  const productId = req.params.productId

  const product = await findProduct({ productId })

  if (!product) return res.sendStatus(404)

  if (String(product.user) !== userId) res.sendStatus(403)

  await deleteProduct({ productId })

  return res.sendStatus(200)
}

export { createProductHandler, getProductHandler, updateProductHandler, deleteProductHandler }
