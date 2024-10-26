'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/redux/store'
import { setAuth } from '~/redux/features/auth/authSlice'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { loginUserAPI } from '~/apis'

const userSignInSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, "The password that you've entered is incorrect.")
    .max(32, "The password that you've entered is incorrect.")
})

const defaultValues = { email: '', password: '' }

interface ErrorMessageProps {
  errorsSignIn: {
    email: { type: string; message: string }
    password: { type: string; message: string }
  }
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorsSignIn }) => {
  if (
    errorsSignIn.email?.type == 'required' ||
    errorsSignIn.password?.type == 'required'
  ) {
    return <p>Email and Password is required</p>
  } else if (errorsSignIn.email?.type == 'email') {
    return <p>Email invalid</p>
  } else if (errorsSignIn.email?.type == 'Server side') {
    return <p>{errorsSignIn.email?.message}</p>
  }
}

function SignInForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const dispatch = useDispatch()

  const signInSignUp = useSelector(
    (state: RootState) => state.signInSignUp.selected
  )
  const [showPassword, setShowPassword] = useState(false)

  const theme = useTheme()
  const colors = colorTokens(theme.palette.mode)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const {
    handleSubmit: handleSubmitSignIn,
    control: controlSignIn,
    reset: resetSignIn,
    setError: setErrorSignIn,
    watch: watchSignIn,
    formState: { errors: errorsSignIn }
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(userSignInSchema)
  })

  const handleSignInFormSubmit = async (data) => {
    const result = await loginUserAPI(data)

    if (typeof result === 'string' || result instanceof String) {
      setErrorSignIn(
        'email',
        {
          type: 'Server side',
          message: result
        },
        { shouldFocus: true }
      )
    } else {
      dispatch(setAuth(result))
      navigate(from, { replace: true })
    }
  }

  useEffect(() => {
    if (!signInSignUp) resetSignIn()
  }, [signInSignUp, resetSignIn])

  const watchInput = watchSignIn('password', '')

  return (
    <>
      <Box
        sx={{
          margin: '40px 0',
          color: colors.white
        }}
      >
        <Typography variant='h2' fontWeight={'bold'}>
          Sign In
        </Typography>
      </Box>

      <Box>
        <Box
          component={'form'}
          onSubmit={handleSubmitSignIn(handleSignInFormSubmit)}
          style={{ width: '100%' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <Box>
              <Controller
                name='email'
                control={controlSignIn}
                errors={errorsSignIn}
                render={({ field }) => (
                  <TextField
                    variant='outlined'
                    label='Email'
                    {...field}
                    fullWidth
                    autoComplete='off'
                    autoFocus
                    sx={{
                      height: '55px',
                      margin: '10px 0',
                      input: { color: colors.white }
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='start'>
                          <EmailOutlinedIcon sx={{ color: colors.white }} />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />

              <Controller
                name='password'
                control={controlSignIn}
                errors={errorsSignIn}
                render={({ field }) => (
                  <TextField
                    variant='outlined'
                    label='Password'
                    type={showPassword ? 'text' : 'password'}
                    {...field}
                    fullWidth
                    autoComplete='off'
                    autoFocus
                    sx={{
                      height: '55px',
                      margin: '10px 0',
                      input: { color: colors.white },
                      'input::-ms-reveal': { display: 'none' },
                      'input::-ms-clear ': { display: 'none' }
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='start'>
                          {watchInput && (
                            <IconButton
                              aria-label='toggle password visibility'
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge='start'
                              sx={{ color: colors.white }}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          )}
                          <LockOutlinedIcon sx={{ color: colors.white }} />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: colors.redAccent[500]
              }}
            >
              <ErrorMessage errorsSignIn={errorsSignIn} />
            </Box>

            <Link href='#' sx={{ color: 'white', marginLeft: 'auto' }}>
              <Typography variant='h5'>Forget Your Password?</Typography>
            </Link>

            <Button
              type='submit'
              variant='contained'
              sx={{
                height: '55px',
                padding: '0 15px',
                margin: '10px 0',
                borderRadius: '10px',
                transition: '0.3s'
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SignInForm
