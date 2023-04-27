export default {
  port: process.env.PORT,
  dbUri: process.env.MONGO_URL,
  saltWorkFactor: process.env.SALT_WORK_FACTOR,
  accessTokenTtl: process.env.ACCESS_TOKEN_TTL,
  refreshTokenTtl: process.env.REFRESH_TOKEN_TTL,
  accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY,
  accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY,
}
