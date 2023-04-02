import config from 'config'
import jwt from 'jsonwebtoken'

const accessTokenPrivateKey = config.get<string>('accessTokenPrivateKey')
const accessTokenPublicKey = config.get<string>('accessTokenPublicKey')

function signJWT(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, accessTokenPrivateKey, {
    ...(options && options),
    algorithm: 'RS256',
  })
}

function validateJWT(token: string) {
  try {
    const decoded = jwt.verify(token, accessTokenPublicKey)
    return {
      valid: true,
      expired: false,
      decoded,
    }
  } catch (e: any) {
    return {
      valid: false,
      expired: e.message === 'jwt expired',
      decoded: null,
    }
  }
}

export { signJWT, validateJWT }
