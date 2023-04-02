import config from 'config'
import { Request, Response } from 'express'

import { signJWT } from '../utils/jwt.utils'
import { validatePassword } from '../service/user.service'
import { createSession } from '../service/session.service'

export async function createUserSessionHandler(req: Request, res: Response) {
  const user = await validatePassword(req.body)

  if (!user) return res.status(401).json({ message: 'Invalid email or password' })
  const session = await createSession(user._id, req.get('user-agent') ?? '')

  const accessToken = signJWT(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get<string>('accessTokenTtl') },
  )

  const refreshToken = signJWT(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get<string>('refreshTokenTtl') },
  )

  res.status(200).json({ accessToken, refreshToken })
}
