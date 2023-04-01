import config from 'config'
import logger from './logger'
import mongoose from 'mongoose'

export default async function mongoConnect() {
  const dbUri = config.get<string>('dbUri')
  try {
    await mongoose.connect(dbUri)
    logger.info('DB connected')
  } catch (error) {
    logger.error(error)
    process.exit(1)
  }
}
