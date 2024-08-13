import { useState } from 'react'

import { keyframes } from '@mui/material'
import { useTheme } from '@mui/material'
import { colorTokens } from '~/customLibraries/color'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Controller, useForm } from 'react-hook-form'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'

import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'

import ModeToggle from '~/components/Mode/ModeToggle'

const animationIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const animationOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
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
  password: yup.string().required('Password is required').min(8).max(32),
  phone: yup
    .string()
    .matches(phoneRegex, 'Phone number is not valid')
    .required('required')
})

const defaultValues = { email: '', password: '', phone: '' }

function SignInSignUp() {
  const [sign, setSign] = useState(false)

  const theme = useTheme()
  const colors = colorTokens(theme.palette.mode)

  const toggleSign = () => {
    setSign(!sign)
    resetSignIn()
    resetSignUp()
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '100vh'
        }}
      >
        <Box
          boxShadow={`0 5px 15px ${colors.grey[500]}`}
          sx={{
            backgroundColor: colors.background,
            borderRadius: '30px',
            position: 'relative',
            overflow: 'hidden',
            width: '768px',
            maxWidth: '100%',
            minHeight: '480px'
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
          >
            {/* SECTION - Left */}
            <Box
              sx={{
                height: '100%',
                width: '50%',
                position: 'absolute',
                left: sign ? '50%' : '0%',
                top: '0%',
                transform: 'translate(0%, 0%)',
                transition: 'all 1s ease-in-out'
              }}
            >
              {/* SECTION - Sign In */}
              <Box
                sx={{
                  height: '100%',
                  display: sign ? 'flex' : 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  opacity: sign ? '100%' : '0%',
                  animation: sign
                    ? `${animationIn} 1.5s linear`
                    : `${animationOut} 1.5s linear`
                }}
              >
                <Typography variant="h1" fontWeight={'bold'}>
                  Sign In
                </Typography>

                {/* SECTION - Sign in third-party options */}
                <Stack direction="row" spacing={0.1}>
                  <ModeToggle />

                  <IconButton aria-label="Google" sx={{ color: colors.grey[500] }}>
                    <GoogleIcon />
                  </IconButton>

                  <IconButton aria-label="Google" sx={{ color: colors.grey[500] }}>
                    <FacebookIcon />
                  </IconButton>
                </Stack>
                {/* !SECTION - Sign in third-party options */}

                <Typography variant="h5" fontStyle={'italic'}>
                  or use your email password
                </Typography>

                {/* SECTION - Sign in form */}
                <form
                  onSubmit={handleSubmitSignIn(handleFormSubmit)}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column'
                    }}
                  >
                    <Controller
                      name="email"
                      control={controlSignIn}
                      errors={errorsSignIn}
                      render={({ field }) => (
                        <input
                          placeholder="Email"
                          style={{
                            backgroundColor: '#eee',
                            border: 'none',
                            margin: '8px 0',
                            padding: '10px 15px',
                            borderRadius: '8px',
                            width: '100%',
                            outline: 'none'
                          }}
                          {...field}
                        />
                      )}
                      aria-invalid={errorsSignIn.email ? 'true' : 'false'}
                    />

                    <Controller
                      name="password"
                      control={controlSignIn}
                      errors={errorsSignIn}
                      render={({ field }) => (
                        <input
                          placeholder="Password"
                          style={{
                            backgroundColor: '#eee',
                            border: 'none',
                            margin: '8px 0',
                            padding: '10px 15px',
                            borderRadius: '8px',
                            width: '100%',
                            outline: 'none'
                          }}
                          {...field}
                        />
                      )}
                      aria-invalid={errorsSignIn.password ? 'true' : 'false'}
                    />
                  </Box>

                  <Link href="#" color="primary">
                    Forget Your Password?
                  </Link>

                  <Box mt="20px">
                    <Button type="submit" color="secondary" variant="contained">
                      Sign In
                    </Button>
                  </Box>
                </form>
                {/* !SECTION - Sign in form */}
              </Box>
              {/* !SECTION - Sign In */}

              {/* SECTION - Sign Up */}
              <Box
                sx={{
                  height: '100%',
                  display: sign ? 'none' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  opacity: sign ? '0%' : '100%',
                  animation: sign
                    ? `${animationOut} 1.5s linear`
                    : `${animationIn} 1.5s linear`
                }}
              >
                <Typography variant="h1" fontWeight={'bold'}>
                  Sign Up
                </Typography>

                {/* SECTION - Sign up third-party options */}
                <Stack direction="row" spacing={0.1}>
                  <ModeToggle />

                  <IconButton aria-label="Google" sx={{ color: colors.grey[500] }}>
                    <GoogleIcon />
                  </IconButton>

                  <IconButton aria-label="Facebook" sx={{ color: colors.grey[500] }}>
                    <FacebookIcon />
                  </IconButton>
                </Stack>
                {/* !SECTION - Sign up third-party options */}

                <Typography variant="h5" fontStyle={'italic'}>
                  or use your email for registeration
                </Typography>

                {/* SECTION - Sign up form */}
                <form
                  onSubmit={handleSubmitSignUp(handleFormSubmit)}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column'
                    }}
                  >
                    <Controller
                      name="email"
                      control={controlSignUp}
                      errors={errorsSignUp}
                      render={({ field }) => (
                        <input
                          placeholder="Email"
                          style={{
                            backgroundColor: '#eee',
                            border: 'none',
                            margin: '8px 0',
                            padding: '10px 15px',
                            borderRadius: '8px',
                            width: '100%',
                            outline: 'none'
                          }}
                          {...field}
                        />
                      )}
                      aria-invalid={errorsSignUp.email ? 'true' : 'false'}
                    />

                    <Controller
                      name="phone"
                      control={controlSignUp}
                      errors={errorsSignUp}
                      render={({ field }) => (
                        <input
                          placeholder="Phone"
                          style={{
                            backgroundColor: '#eee',
                            border: 'none',
                            margin: '8px 0',
                            padding: '10px 15px',
                            borderRadius: '8px',
                            width: '100%',
                            outline: 'none'
                          }}
                          {...field}
                        />
                      )}
                      aria-invalid={errorsSignUp.phone ? 'true' : 'false'}
                    />

                    <Controller
                      name="password"
                      control={controlSignUp}
                      errors={errorsSignUp}
                      render={({ field }) => (
                        <input
                          placeholder="Password"
                          style={{
                            backgroundColor: '#eee',
                            border: 'none',
                            margin: '8px 0',
                            padding: '10px 15px',
                            borderRadius: '8px',
                            width: '100%',
                            outline: 'none'
                          }}
                          {...field}
                        />
                      )}
                      aria-invalid={errorsSignUp.password ? 'true' : 'false'}
                    />
                  </Box>

                  <Box mt="20px">
                    <Button type="submit" color="secondary" variant="contained">
                      Sign Up
                    </Button>
                  </Box>
                </form>
                {/* !SECTION - Sign up form */}
              </Box>
              {/* !SECTION - Sign Up */}
            </Box>
            {/* !SECTION - Left */}

            {/* SECTION - Right */}
            <Box
              boxShadow={`0 5px 15px ${colors.grey[500]}`}
              sx={{
                height: '100%',
                width: '50%',
                position: 'absolute',
                left: sign ? '0%' : '50%',
                top: '0%',
                transform: 'translate(0%, 0%)',
                transition: 'left 1s ease-in-out, border-radius 1.5s ease-in-out',
                color: colors.white,
                backgroundColor: colors.primary[800],
                background: sign
                  ? `linear-gradient(to left, ${colors.purpleAccent[400]}, ${colors.purpleAccent[500]})`
                  : `linear-gradient(to right, ${colors.purpleAccent[400]}, ${colors.purpleAccent[500]})`,
                borderRadius: sign ? '0 150px 100px 0' : '150px 0 0 100px'
              }}
            >
              {/* SECTION - Hello content */}
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  display: sign ? 'flex' : 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
              >
                <Typography variant="h1" fontWeight={'bold'}>
                  Hello, Friend!
                </Typography>

                <Typography variant="h5" fontStyle={'italic'}>
                  Register with your personal details
                </Typography>
                <Typography variant="h5" fontStyle={'italic'}>
                  to use all of site features
                </Typography>

                <Box mt="20px">
                  <Button color="secondary" variant="contained" onClick={toggleSign}>
                    Sign Up
                  </Button>
                </Box>
              </Box>
              {/* !SECTION - Hello content */}

              {/* SECTION - Welcome content */}
              <Box
                sx={{
                  height: '100%',
                  display: sign ? 'none' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
              >
                <Typography variant="h1" fontWeight={'bold'}>
                  Welcome Back!
                </Typography>

                <Typography variant="h5" fontStyle={'italic'}>
                  Enter your personal details
                </Typography>
                <Typography variant="h5" fontStyle={'italic'}>
                  to use all of site features
                </Typography>

                <Box mt="20px">
                  <Button color="secondary" variant="contained" onClick={toggleSign}>
                    Sign In
                  </Button>
                </Box>
              </Box>
              {/* !SECTION - Welcome content */}
            </Box>
            {/* !SECTION - Right */}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SignInSignUp
