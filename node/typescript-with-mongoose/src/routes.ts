import { Express, Request, Response } from 'express'

import requireUser from './middleware/requireUser'
import { createUserSchema } from './schema/user.schema'
import validateResource from './middleware/validateResource'
import { createSessionSchema } from './schema/session.schema'
import { createUserHandler } from './controller/user.controller'
import {
  createUserSessionHandler,
  deleteSessionHandler,
  getUserSessionsHandler,
} from './controller/session.controller'
import {
  createProductHandler,
  deleteProductHandler,
  getProductHandler,
  updateProductHandler,
} from './controller/product.controller'
import {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from './schema/product.schema'

export default function routes(app: Express) {
  app.post('/api/users', validateResource(createUserSchema), createUserHandler)

  app.get('/api/sessions', requireUser, getUserSessionsHandler)
  app.post('/api/sessions', validateResource(createSessionSchema), createUserSessionHandler)
  app.delete('/api/sessions', requireUser, deleteSessionHandler)

  app.get('/api/products/:productId', validateResource(getProductSchema), getProductHandler)
  app.post(
    '/api/products',
    [requireUser, validateResource(createProductSchema)],
    createProductHandler,
  )
  app.put(
    '/api/products/:productId',
    [requireUser, validateResource(updateProductSchema)],
    updateProductHandler,
  )
  app.put(
    '/api/products/:productId',
    [requireUser, validateResource(deleteProductSchema)],
    deleteProductHandler,
  )

  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))
}
