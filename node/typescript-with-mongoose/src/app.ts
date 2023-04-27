import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import routes from './routes'
import deserializeUser from './middleware/deserialiseUser'

const app = express()

app.use(express.json())
app.use(deserializeUser)
routes(app)

export default app
