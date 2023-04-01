import { Request, Response } from 'express'

import { omit } from 'lodash'

import logger from '../utils/logger'
import { createUser } from '../service/user.service'
import { CreateUserSchema } from '../schema/user.schema'

export async function createUserHandler(
  req: Request<{}, {}, CreateUserSchema>['body'],
  res: Response,
) {
  try {
    const user = await createUser(req.body)
    res.status(201).json(omit(user.toJSON(), 'password'))
  } catch (e: any) {
    logger.error(e)
    return res.status(409).send(e.message)
  }
}
