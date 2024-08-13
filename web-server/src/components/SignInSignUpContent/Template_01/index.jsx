import { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'

import { useTheme, keyframes, useMediaQuery } from '@mui/material'
import { colorTokens } from '~/customLibraries/color'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Link from '@mui/material/Link'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const leftRight = keyframes`
  to{
    transform: translateX(10px)
  }
`
const upDown = keyframes`
  to{
    transform: translateY(10px)
  }
`
const scaleDown = keyframes`
  to{
    transform: scale(0.95)
  }
`
const scaleUp = keyframes`
  to{
    transform: scale(1.05)
  }
`

const phoneRegex =
  // eslint-disable-next-line no-useless-escape
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

const userSignInSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email is required'),
  password: yup.string().required('Password is required').min(8).max(32)
})

const userSignUpSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email is required'),
  name: yup.string().required('Name is required'),
  password: yup.string().required('Password is required').min(8).max(32),
  phone: yup.string().matches(phoneRegex, 'Phone number is not valid')
})

const defaultValues = { email: '', name: '', password: '' }

function SignInSignUp() {
  const [activatedButton, setActivatedButton] = useState(false)

  const theme = useTheme()
  const colors = colorTokens(theme.palette.mode)
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const imageDefaultStyle = {
    position: 'absolute',
    left: '0',
    width: '400px'
  }

  const {
    // register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    control: controlSignIn,
    reset: resetSignIn,
    // setError: setErrorSignIn,
    formState: { errors: errorsSignIn }
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(userSignInSchema)
  })

  const {
    // register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    control: controlSignUp,
    reset: resetSignUp,
    // setError: setErrorSignUp,
    formState: { errors: errorsSignUp }
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(userSignUpSchema)
  })

  const handleFormSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <>
      <Box
        sx={{
          background: 'url("/desktop-backgrounds.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '0 20px'
        }}
      >
        {/* SECTION - Form container */}
        <Box
          sx={{
            display: 'flex',
            width: isMobileScreen ? '400px' : '1000px',
            minWidth: '350px',
            height: '600px',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '30px',
            backdropFilter: 'blur(20px)',
            overflow: 'hidden'
          }}
        >
          {/* SECTION - Column 1 */}
          <Box
            sx={{
              display: isMobileScreen ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '55%',
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: activatedButton ? '0 30% 20% 0' : '0 20% 30% 0',
              backdropFilter: 'blur(30px)',
              transition: 'border-radius .3s'
            }}
          >
            {/* SECTION - Image layer */}
            <Box
              sx={{
                position: 'relative'
              }}
            >
              <Box
                component="img"
                src="/white-outline.png"
                sx={{
                  width: '400px',
                  animation: `${scaleUp} 3s ease-in-out alternate infinite`
                }}
              />
              <Box
                component="img"
                src="/dots.png"
                sx={{
                  ...imageDefaultStyle,
                  animation: `${scaleUp} 3s ease-in-out alternate infinite`
                }}
              />
              <Box
                component="img"
                src="/coin.png"
                sx={{
                  ...imageDefaultStyle,
                  animation: `${scaleDown} 3s ease-in-out alternate infinite`
                }}
              />
              <Box
                component="img"
                src="/spring.png"
                sx={{
                  ...imageDefaultStyle,
                  animation: `${scaleDown} 3s ease-in-out alternate infinite`
                }}
              />
              <Box
                component="img"
                src="/rocket.png"
                sx={{
                  ...imageDefaultStyle,
                  animation: `${upDown} 3s ease-in-out alternate infinite`
                }}
              />
              <Box
                component="img"
                src="/cloud.png"
                sx={{
                  ...imageDefaultStyle,
                  animation: `${leftRight} 3s ease-in-out alternate infinite`
                }}
              />
              <Box
                component="img"
                src="/stars.png"
                sx={{
                  ...imageDefaultStyle,
                  animation: `${scaleDown} 3s ease-in-out alternate infinite`
                }}
              />
            </Box>
            {/* !SECTION - Image layer */}

            <Typography
              variant="h4"
              sx={{ textAlign: 'center', color: colors.white, width: '300px' }}
            >
              {activatedButton ? 'Welcome to' : 'Welcome back to'}
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: 'bold', color: colors.greenAccent[700] }}
            >
              The August House
            </Typography>
          </Box>
          {/* !SECTION - Column 1 */}

          {/* SECTION - Column 2 */}
          <Box
            sx={{
              position: 'relative',
              width: isMobileScreen ? '100%' : '45%',
              padding: '20px',
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '20px'
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  setActivatedButton(false)
                  resetSignIn()
                  resetSignUp()
                }}
                sx={{
                  padding: '5px 30px',
                  borderRadius: '30px',
                  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  transition: '.2s',
                  background: activatedButton
                    ? 'rgba(255, 255, 255, 0.2)'
                    : colors.grey[200]
                }}
              >
                Sign In
              </Button>

              <Button
                variant="contained"
                onClick={() => {
                  setActivatedButton(true)
                  resetSignIn()
                  resetSignUp()
                }}
                sx={{
                  padding: '5px 30px',
                  borderRadius: '30px',
                  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  transition: '.2s',
                  background: !activatedButton
                    ? 'rgba(255, 255, 255, 0.2)'
                    : colors.grey[200]
                }}
              >
                Sign Up
              </Button>
            </Box>

            {/* SECTION - Sign In */}
            <Box
              sx={{
                position: 'absolute',
                left: !activatedButton ? '50%' : '150%',
                opacity: !activatedButton ? '1' : '0',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                padding: '0 4vh',
                transition: '0.3s'
              }}
            >
              <Box
                sx={{
                  margin: '40px 0',
                  color: colors.white
                }}
              >
                <Typography variant="h2" fontWeight={'bold'}>
                  Sign In
                </Typography>
              </Box>

              {/* SECTION - Sign in Form */}
              <Box>
                <Box
                  component={'form'}
                  onSubmit={handleSubmitSignIn(handleFormSubmit)}
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
                        name="email"
                        control={controlSignIn}
                        errors={errorsSignIn}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            label="Email"
                            {...field}
                            fullWidth
                            autoFocus
                            sx={{
                              height: '55px',
                              margin: '10px 0',
                              input: { color: colors.white }
                            }}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  <EmailOutlinedIcon
                                    sx={{ color: colors.white }}
                                  />
                                </InputAdornment>
                              )
                            }}
                          />
                        )}
                      />

                      <Controller
                        name="password"
                        control={controlSignIn}
                        errors={errorsSignIn}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            label="Password"
                            type="password"
                            {...field}
                            fullWidth
                            autoFocus
                            sx={{
                              height: '55px',
                              margin: '10px 0',
                              input: { color: colors.white }
                            }}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  <LockOutlinedIcon
                                    sx={{ color: colors.white }}
                                  />
                                </InputAdornment>
                              )
                            }}
                          />
                        )}
                      />
                    </Box>

                    <p>{errorsSignIn.email?.message}</p>
                    <p>{errorsSignIn.password?.message}</p>

                    <Link href="#" sx={{ color: 'white', marginLeft: 'auto' }}>
                      <Typography variant="h5">
                        Forget Your Password?
                      </Typography>
                    </Link>

                    <Button
                      type="submit"
                      variant="contained"
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
              {/* !SECTION - Sign in Form */}
            </Box>
            {/* !SECTION - Sign In */}

            {/* SECTION - Sign Up */}
            <Box
              sx={{
                position: 'absolute',
                left: activatedButton ? '50%' : '-50%',
                opacity: activatedButton ? '1' : '0',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                padding: '0 4vh',
                transition: '0.3s'
              }}
            >
              <Box
                sx={{
                  margin: '40px 0',
                  color: colors.white
                }}
              >
                <Typography variant="h2" fontWeight={'bold'}>
                  Sign Up
                </Typography>
              </Box>

              {/* SECTION - Sign Up Form */}
              <Box>
                <Box component={'form'} sx={{ width: '100%' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    }}
                  >
                    <Box>
                      <TextField
                        variant="outlined"
                        label="Email"
                        fullWidth
                        autoFocus
                        sx={{
                          height: '55px',
                          margin: '10px 0',
                          input: { color: colors.white }
                        }}
                      />

                      <TextField
                        variant="outlined"
                        label="Name"
                        fullWidth
                        sx={{
                          height: '55px',
                          margin: '10px 0',
                          input: { color: colors.white }
                        }}
                      />

                      <TextField
                        variant="outlined"
                        label="Password"
                        type="password"
                        fullWidth
                        sx={{
                          height: '55px',
                          margin: '10px 0',
                          input: { color: colors.white }
                        }}
                      />
                    </Box>

                    <Link href="#" sx={{ color: 'white', marginLeft: 'auto' }}>
                      <Typography variant="h5">
                        Forget Your Password?
                      </Typography>
                    </Link>

                    <Button
                      variant="contained"
                      sx={{
                        height: '55px',
                        padding: '0 15px',
                        margin: '10px 0',
                        borderRadius: '10px',
                        transition: '0.3s'
                      }}
                    >
                      Sign Up
                    </Button>
                  </Box>
                </Box>
              </Box>
              {/* !SECTION - Sign Up Form */}
            </Box>
            {/* !SECTION - Sign Up */}
          </Box>
          {/* !SECTION - Column 2 */}
        </Box>
        {/* !SECTION - Form container */}
      </Box>
    </>
  )
}

export default SignInSignUp
