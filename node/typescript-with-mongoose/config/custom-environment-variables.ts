export default {
  port: 'PORT',
  dbUri: 'MONGO_URL',
  saltWorkFactor: {
    __name: 'SALT_WORK_FACTOR',
    __format: 'json',
  },
  accessTokenTtl: 'ACCESS_TOKEN_TTL',
  refreshTokenTtl: 'REFRESH_TOKEN_TTL',
  accessTokenPrivateKey: 'ACCESS_TOKEN_PRIVATE_KEY',
  accessTokenPublicKey: 'ACCESS_TOKEN_PUBLIC_KEY',
  refreshTokenPrivateKey: ``,
  refreshTokenPublicKey: ``,
}
