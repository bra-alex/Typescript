import config from 'config'
import { Request, Response } from 'express'

import { signJWT } from '../utils/jwt.utils'
import { validatePassword } from '../service/user.service'
import { createSession, getSessions } from '../service/session.service'

async function createUserSessionHandler(req: Request, res: Response) {
  const user = await validatePassword(req.body)

  if (!user) return res.status(401).json({ message: 'Invalid email or password' })
  const session = await createSession(user._id, req.get('user-agent') ?? '')

  const accessToken = signJWT(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get('accessTokenTtl') },
  )

  const refreshToken = signJWT(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get('refreshTokenTtl') },
  )

  res.status(200).json({ accessToken, refreshToken })
}

async function getUserSessionsHandler(req: Request, res: Response) {
  const user = res.locals.user
  const sessions = await getSessions({ user: user._id, valid: true })

  res.status(200).json(sessions)
}

async function deleteSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session
  return res.status(200).json({
    sessionId,
    accessToken: null,
    refreshToken: null,
  })
}

export { createUserSessionHandler, getUserSessionsHandler, deleteSessionHandler }
