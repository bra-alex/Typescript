import config from 'config'
import { get } from 'lodash'
import { FilterQuery, UpdateQuery } from 'mongoose'

import { findUser } from './user.service'
import { signJWT, validateJWT } from '../utils/jwt.utils'
import SessionModel, { SchemaDocument } from '../models/session.model'

async function createSession(userId: string, userAgent: string) {
  const session = await SessionModel.create({ user: userId, userAgent })

  return session.toJSON()
}

async function getSessions(query: FilterQuery<SchemaDocument>) {
  return SessionModel.find(query).lean()
}

async function updateSession(
  query: FilterQuery<SchemaDocument>,
  update: UpdateQuery<SchemaDocument>,
) {
  return SessionModel.updateOne(query, update)
}

async function refreshAccessToken({ refreshToken }: { refreshToken: string }) {
  const { decoded } = validateJWT(refreshToken)
  if (!decoded || !get(decoded, 'session')) return false

  const session = await SessionModel.findById(get(decoded, 'session'))

  if (!session || !session.valid) return false

  const user = await findUser({ _id: session.user })

  if (!user) return false

  const accessToken = signJWT(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get('refreshTokenTtl') },
  )

  return accessToken
}

export { createSession, getSessions, updateSession, refreshAccessToken }
