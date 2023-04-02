import { get } from 'lodash'
import { NextFunction, Request, Response } from 'express'

import { validateJWT } from '../utils/jwt.utils'

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = get(req, 'headers.authorization', '').replace(/^Bearer\s/, '')

  if (!accessToken) return next()

  const { decoded, expired } = validateJWT(accessToken)

  if (decoded) {
    res.locals.user = decoded
    return next()
  }
}
