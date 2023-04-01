import { Express, Request, Response } from 'express'

import { createUserSchema } from './schema/user.schema'
import validateResource from './middleware/validateResource'
import { createUserHandler } from './controller/user.controller'

export default function routes(app: Express) {
  app.post('/api/users', validateResource(createUserSchema), createUserHandler)
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))
}
