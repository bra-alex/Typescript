import config from 'config'
import express from 'express'

import routes from './routes'
import logger from './utils/logger'
import mongoConnect from './utils/connect'
import deserializeUser from './middleware/deserialiseUser'

const app = express()
const PORT = config.get<number>('port')

app.use(express.json())
app.use(deserializeUser)

app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`)
  await mongoConnect()

  routes(app)
})
