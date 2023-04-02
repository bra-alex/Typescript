import { Express, Request, Response } from 'express'

import { createUserSchema } from './schema/user.schema'
import validateResource from './middleware/validateResource'
import { createSessionSchema } from './schema/session.schema'
import { createUserHandler } from './controller/user.controller'
import { createUserSessionHandler, getUserSessionsHandler } from './controller/session.controller'

export default function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))
  app.get('/api/sessions', getUserSessionsHandler)

  app.post('/api/users', validateResource(createUserSchema), createUserHandler)
  app.post('/api/sessions', validateResource(createSessionSchema), createUserSessionHandler)
}
