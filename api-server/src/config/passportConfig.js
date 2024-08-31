import { Strategy as LocalStrategy } from 'passport-local'
import { ExtractJwt, Strategy as jwtStrategy } from 'passport-jwt'
import { authenticator } from '~/utilities/authenticator'

import { env } from 'process'

import { userModel } from '~/models/userModel'

export const initializePassport = (passport) => {
  const authenticateUser = async (email, password, done) => {
    const user = await userModel.findOneByEmail(email)

    if (user == null) {
      return done(null, false, { message: 'No user with that email' })
    }

    try {
      const result = await authenticator.isPasswordCorrect(
        password,
        user.password
      )
      if (result) {
        const accessToken = authenticator.generateAccessToken(user)
        const refreshToken = authenticator.generateRefreshToken(user)

        return done(
          null,
          { ...user, accessToken: accessToken, refreshToken: refreshToken },
          { message: 'Logged in successfully' }
        )
      } else {
        return done(null, false, { message: 'Email or password incorrect' })
      }
    } catch (error) {
      return done(error)
    }
  }

  const jwtAuthenticateToken = async (jwtPayload, done) => {
    try {
      const user = await userModel.findOneById(jwtPayload._id)

      if (user) {
        return done(null, user, { message: 'Logged in successfully' })
      } else {
        return done(null, false, { message: 'Email or password incorrect' })
      }
    } catch (error) {
      return done(error)
    }
  }

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      authenticateUser
    )
  )

  passport.use(
    new jwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: env.SESSION_SECRET
      },
      jwtAuthenticateToken
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user._id)
  })

  passport.deserializeUser((id, done) => {
    return done(null, userModel.findOneById(id))
  })
}
