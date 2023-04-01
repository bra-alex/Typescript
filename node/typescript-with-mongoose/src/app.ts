import config from 'config'
import express from 'express'

import mongoConnect from './utils/connect'

const app = express()
const PORT = config.get<number>('port')

app.listen(PORT, async () => {
  console.log('Running')
  await mongoConnect()
})
