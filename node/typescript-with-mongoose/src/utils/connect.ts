import config from 'config'
import mongoose from 'mongoose'

export default async function mongoConnect() {
  const dbUri = config.get<string>('dbUri')
  try {
    await mongoose.connect(dbUri)
    console.log('DB connected')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
