import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import { Express, Request, Response } from 'express'

import log from './logger'
import { version } from '../../package.json'

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Docs',
      version,
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes.ts', './src/schema/*.ts'],
}

const swaggerSpec = swaggerJsdoc(options)

export default function swaggerDocs(app: Express, port: number) {
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

  app.get('docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  log.info(`Docs available at http://localhost:${port}/docs`)
}
