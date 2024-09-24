import { env } from 'process'
const redis = require('redis')
// var debugRedis = require('debug')('pmo:redis')

const REDIS_URL = env.REDIS_URL
const client = redis.createClient({
  url: REDIS_URL
})

client.on('error', (err) => err)

module.exports.connectRedis = async function () {
  try {
    await client.connect()

    // debugRedis('Redis connected')
  } catch (error) {
    // debugRedis(error)
  }
}

module.exports.storeRedis = async function (id, data) {
  delete data.checked

  var result = await client.hSet('user-session:' + id, data)

  client.expire('user-session:', 24 * 60 * 60)

  return result
}

module.exports.retrieveRedis = async function (id) {
  var filter = 'user-session:' + id
  let userSession = await client.hGetAll(filter)

  return userSession

  // return JSON.stringify(userSession, null, 2);
}
