import mongoose from 'mongoose'
import supertest from 'supertest'

import app from '../app'
import * as UserService from '../service/user.service'
import * as SessionService from '../service/session.service'
import { createUserSessionHandler } from '../controller/session.controller'

const userId = new mongoose.Types.ObjectId().toString()

const userPayload = {
  _id: userId,
  email: 'Joe_Aufderhar25@hotmail.com',
  name: 'Emiliano Oberbrunner',
}
const userInput = {
  email: 'Joe_Aufderhar25@hotmail.com',
  name: 'Emiliano Oberbrunner',
  password: 'q5egyOGGiUotZYX',
  passwordConfirmation: 'q5egyOGGiUotZYX',
}

const sessionPayload = {
  _id: new mongoose.Types.ObjectId(),
  user: userId,
  valid: true,
  userAgent: 'PostmanRuntime/7.31.3',
  createdAt: new Date('2023-04-02T12:45:36.755Z'),
  updatedAt: new Date('2023-04-02T12:45:36.755Z'),
  __v: 0,
}

describe('user', () => {
  describe('user registration', () => {
    describe('given the username and password are valid', () => {
      it('should return the user payload', async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, 'createUser')
          // @ts-ignore
          .mockReturnValueOnce(userPayload)

        const { body, statusCode } = await supertest(app).post('/api/users').send(userInput)

        expect(statusCode).toBe(201)
        expect(body).toEqual(userPayload)

        expect(createUserServiceMock).toHaveBeenCalledWith(userInput)
      })
    })

    describe('given the passwords do not match', () => {
      it('should return a 400', async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, 'createUser')
          // @ts-ignore
          .mockReturnValueOnce(userPayload)

        await supertest(app)
          .post('/api/users')
          .send({ ...userInput, passwordConfirmation: 'password' })
          .expect(400)

        expect(createUserServiceMock).not.toHaveBeenCalled()
      })
    })

    describe('given the user service throws', () => {
      it('should return a 409', async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, 'createUser')
          // @ts-ignore
          .mockRejectedValue('rejected')

        await supertest(app).post('/api/users').send(userInput).expect(409)

        expect(createUserServiceMock).toHaveBeenCalled()
      })
    })
  })

  describe('create user session', () => {
    describe('given the username and password are valid', () => {
      it('should return a signed accessToken & refreshToken', async () => {
        jest
          .spyOn(UserService, 'validatePassword')
          // @ts-ignore
          .mockReturnValue(userPayload)

        jest
          .spyOn(SessionService, 'createSession')
          //@ts-ignore
          .mockReturnValue(sessionPayload)

        const req = {
          get: () => {
            return 'PostmanRuntime/7.31.3'
          },
          body: {
            name: 'Emiliano Oberbrunner',
            password: 'q5egyOGGiUotZYX',
          },
        }

        const send = jest.fn()

        const res = {
          send,
        }

        // @ts-ignore
        await createUserSessionHandler(req, res)

        expect(send).toHaveBeenCalledWith({
          accessToken: expect.any(String),
          refreshToken: expect.any(String),
        })
      })
    })
  })
})
