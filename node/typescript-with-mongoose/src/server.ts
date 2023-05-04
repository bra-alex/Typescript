import http from 'http'
import dotenv from 'dotenv'
dotenv.config()

import config from 'config'

import app from './app'
import logger from './utils/logger'
import mongoConnect from './utils/connect'
import swaggerDocs from './utils/swagger'

const PORT = config.get<number>('port')

const server = http.createServer(app)

server.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`)
  await mongoConnect()
  swaggerDocs(app, PORT)
})
