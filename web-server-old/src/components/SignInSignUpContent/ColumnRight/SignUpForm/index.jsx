import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSignInSignUp } from '~/redux/features/signInSignUp/signInSignUp'

import { useTheme } from '@mui/material'
import { colorTokens } from '~/customLibraries/color'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { PASSWORD_RULE, PASSWORD_RULE_MESSAGE } from '~/utilities/validators'
import { createNewUserAPI } from '~/apis'

const userSignUpSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email is required'),
  name: yup.string().required('Name is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .max(32, 'Password is too long - should be 32 chars maximum.')
    .matches(PASSWORD_RULE, 'Please create a stronger password.')
})

const defaultValues = { email: '', name: '', password: '' }

const ErrorMessage = (props) => {
  if (
    props.errorsSignUp.email?.type == 'required' ||
    props.errorsSignUp.name?.type == 'required' ||
    props.errorsSignUp.password?.type == 'required'
  ) {
    return (
      <>
        <Typography>All fields with * are required</Typography>
      </>
    )
  } else if (props.errorsSignUp.email?.type == 'email') {
    return (
      <>
        <Typography>Email invalid</Typography>
      </>
    )
  } else if (props.errorsSignUp.email?.type == 'Server side') {
    return (
      <>
        <Typography>{props.errorsSignUp.email?.message}</Typography>
      </>
    )
  } else if (
    props.errorsSignUp.password?.type == 'min' ||
    props.errorsSignUp.password?.type == 'matches'
  ) {
    return (
      <>
        <Typography>{PASSWORD_RULE_MESSAGE}</Typography>
      </>
    )
  }
}

function SignUpForm() {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const signInSignUp = useSelector((state) => state.signInSignUp.selected)
  const [showPassword, setShowPassword] = useState(false)

  const theme = useTheme()
  const colors = colorTokens(theme.palette.mode)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const {
    handleSubmit: handleSubmitSignUp,
    control: controlSignUp,
    reset: resetSignUp,
    setError: setErrorSignUp,
    watch: watchSignUp,
    formState: { errors: errorsSignUp }
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(userSignUpSchema)
  })

  const handleSignUpFormSubmit = async (data) => {
    const result = await createNewUserAPI(data)

    if (result.created) {
      dispatch(setSignInSignUp(false))
      navigate('/login')
    } else {
      setErrorSignUp(
        'email',
        {
          type: 'Server side',
          message: 'Email exited'
        },
        { shouldFocus: true }
      )
    }
  }

  useEffect(() => {
    if (signInSignUp) resetSignUp()
  }, [signInSignUp, resetSignUp])

  const watchInput = watchSignUp('password', '')

  return (
    <>
      <Box
        sx={{
          margin: '40px 0',
          color: colors.white
        }}
      >
        <Typography variant='h2' fontWeight={'bold'}>
          Sign Up
        </Typography>
      </Box>

      <Box>
        <Box
          component={'form'}
          onSubmit={handleSubmitSignUp(handleSignUpFormSubmit)}
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
                control={controlSignUp}
                errors={errorsSignUp}
                render={({ field }) => (
                  <TextField
                    variant='outlined'
                    label='Email*'
                    type='text'
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
                name='name'
                control={controlSignUp}
                errors={errorsSignUp}
                render={({ field }) => (
                  <TextField
                    variant='outlined'
                    label='Name*'
                    type='text'
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
                          <PersonOutlineOutlinedIcon sx={{ color: colors.white }} />
                        </InputAdornment>
                      )
                    }}
                  />
                )}
              />

              <Controller
                name='password'
                control={controlSignUp}
                errors={errorsSignUp}
                render={({ field }) => (
                  <TextField
                    variant='outlined'
                    label='Password*'
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
                              {showPassword ? <VisibilityOff /> : <Visibility />}
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
              <ErrorMessage errorsSignUp={errorsSignUp} />
            </Box>

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
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SignUpForm
