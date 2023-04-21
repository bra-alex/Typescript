import { FilterQuery, UpdateQuery } from 'mongoose'
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

export { createSession, getSessions, updateSession }
