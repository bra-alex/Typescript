import mongoose from 'mongoose'
import supertest from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'

import app from '../app'
import { createProduct } from '../service/product.service'
import { ProductInput } from '../models/product.model'
import { signJWT } from '../utils/jwt.utils'

const userId = new mongoose.Types.ObjectId().toString()

const productPayload: ProductInput = {
  user: userId,
  title: 'Canon EOS 1500D DSLR Camera with 18-55mm Lens',
  description:
    'Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go.',
  price: 879.99,
  image: 'https://i.imgur.com/QlRphfQ.jpg',
}

const userPayload = {
  _id: userId,
  name: 'Chelsea',
  email: 'Immanuel.Harber@gmail.com',
}

describe('product', () => {
  jest.setTimeout(15000)

  beforeAll(async () => {
    const mongoService = await MongoMemoryServer.create()
    await mongoose.connect(mongoService.getUri())
  })

  afterAll(async () => {
    await mongoose.disconnect()
    await mongoose.connection.close()
  })

  describe('get product', () => {
    describe('given the product does not exist', () => {
      it('should return a 404', async () => {
        const productId = 'product'
        await supertest(app).get(`/api/products/${productId}`).expect(404)
      })
    })

    describe('given the product does exist', () => {
      it('should return a 200 status and the product', async () => {
        const product = await createProduct(productPayload)
        const productId = product.productId
        const { body, statusCode } = await supertest(app).get(`/api/products/${productId}`)
        expect(statusCode).toBe(200)
        expect(body.productId).toBe(productId)
      })
    })
  })

  describe('create product route', () => {
    describe('given the user is not logged in', () => {
      it('should return a 403', async () => {
        await supertest(app).post('/api/products').expect(403)
      })
    })
  })

  describe('create product route', () => {
    describe('given the user is logged in', () => {
      it('should return a 200 and create the product', async () => {
        const jwt = signJWT(userPayload)

        const { body, statusCode } = await supertest(app)
          .post('/api/products')
          .set('Authorization', `Bearer ${jwt}`)
          .send(productPayload)

        expect(statusCode).toBe(200)
        expect(body).toEqual({
          __v: 0,
          _id: expect.any(String),
          createdAt: expect.any(String),
          description:
            'Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go.',
          image: 'https://i.imgur.com/QlRphfQ.jpg',
          price: 879.99,
          productId: expect.any(String),
          title: 'Canon EOS 1500D DSLR Camera with 18-55mm Lens',
          updatedAt: expect.any(String),
          user: expect.any(String),
        })
      })
    })
  })
})
