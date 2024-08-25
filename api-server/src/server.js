import express from 'express'
import cors from 'cors'
import { corsOptions } from './config/cors'
import os from 'os'
import { env } from 'process'
import { log } from './utilities/logger'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware'

import exitHook from 'async-exit-hook'

import { CONNECT_DB, DISSCONNECT_DB } from './config/mongodb'

import { APIs_V1 } from '~/routes/v1'

const START_SERVER = () => {
  const app = express()

  app.use(cors(corsOptions))

  const hostname = os.hostname
  const port = env.APP_PORT

  //NOTE - Enable req.body json data
  app.use(express.json())

  //NOTE - Use APIs V1
  app.use('/v1', APIs_V1)

  //NOTE - Middleware error handling
  app.use(errorHandlingMiddleware)

  app.listen(port, hostname, () => {
    log(
      'info',
      `Hello NhanVo, Back-end Server is running successfully at Host: ${hostname} and Port: ${port}`
    )
  })

  exitHook(() => {
    DISSCONNECT_DB()
    log('info', 'Server is shutting down...')
    process.exit(0)
  })
}

;(async () => {
  try {
    await CONNECT_DB()

    START_SERVER()
  } catch (error) {
    log('error', error)
    process.exit(1)
  }
})()
