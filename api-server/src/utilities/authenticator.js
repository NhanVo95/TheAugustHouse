var crypto = require('crypto')

/**
 * generates random string of characters i.e salt
 * NOTE - function
 * param {number} length - Length of the random string.
 */
const genRandomString = (length) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex') /** convert to hexadecimal format */
    .slice(0, length) /** return required number of characters */
}

/**
 * hash password with sha512.
 * NOTE - function
 * param {string} password - List of required fields.
 * param {string} salt - Data to be validated.
 */
const sha512 = (password, salt) => {
  var hash = crypto.createHmac('sha512', salt) /** Hashing algorithm sha512 */
  hash.update(password)
  var value = hash.digest('hex')
  return {
    salt: salt,
    passwordHash: value
  }
}

const saltHashPassword = (password) => {
  var salt = genRandomString(12) /** Gives us salt of length 12 */
  return sha512(password, salt)
}

const isPasswordCorrect = (password, passwordHash, salt) => {
  return passwordHash == sha512(password, salt).passwordHash ? true : false
}

export const authenticator = { saltHashPassword, isPasswordCorrect }
