import { get } from 'lodash'
import { NextFunction, Request, Response } from 'express'

import { validateJWT } from '../utils/jwt.utils'
import { refreshAccessToken } from '../service/session.service'

const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = get(req, 'headers.authorization', '').replace(/^Bearer\s/, '')
  const refreshToken = get(req, 'headers.x-refresh') as string

  if (!accessToken) return next()

  const { decoded, expired } = validateJWT(accessToken)

  if (decoded) {
    res.locals.user = decoded
    return next()
  }

  if (expired && refreshToken) {
    const newAccessToken = await refreshAccessToken({ refreshToken })

    if (newAccessToken) {
      res.setHeader('x-access-token', newAccessToken)
    }

    const result = validateJWT(newAccessToken as string)

    res.locals.user = result.decoded

    return next()
  }

  return next()
}

export default deserializeUser
