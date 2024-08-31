import { genSalt, hash, compare } from 'bcrypt'
import { env } from 'process'
import { sign, verify } from 'jsonwebtoken'

const genRandomString = async (length) => {
  return await genSalt(length)
}

const saltHashPassword = async (password) => {
  var salt = await genRandomString(12) /** Gives us salt of length 12 */
  return await hash(password, salt)
}

const isPasswordCorrect = async (password, hashedPassword) => {
  return (await compare(password, hashedPassword)) ? true : false
}

const generateAccessToken = (user) => {
  return sign(user, env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
}

const generateRefreshToken = (user) => {
  return sign(user, env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' })
}

const authenticateToken = async (authHeader) => {}

export const authenticator = {
  saltHashPassword,
  isPasswordCorrect,
  generateAccessToken,
  generateRefreshToken,
  authenticateToken
}
