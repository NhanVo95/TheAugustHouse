import { useDispatch, useSelector } from 'react-redux'
import { setSignInSignUp } from '~/redux/features/signInSignUp/signInSignUp'

import { useTheme, useMediaQuery } from '@mui/material'
import { colorTokens } from '~/customLibraries/color'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

function ColumnRight() {
  const dispatch = useDispatch()
  const signInSignUp = useSelector((state) => state.signInSignUp.selected)

  const theme = useTheme()
  const colors = colorTokens(theme.palette.mode)
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
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
            variant='contained'
            onClick={() => {
              dispatch(setSignInSignUp(false))
            }}
            sx={{
              padding: '5px 30px',
              borderRadius: '30px',
              boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              transition: '.2s',
              background: signInSignUp ? 'rgba(255, 255, 255, 0.2)' : colors.grey[200]
            }}
          >
            Sign In
          </Button>

          <Button
            variant='contained'
            onClick={() => {
              dispatch(setSignInSignUp(true))
            }}
            sx={{
              padding: '5px 30px',
              borderRadius: '30px',
              boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              transition: '.2s',
              background: !signInSignUp ? 'rgba(255, 255, 255, 0.2)' : colors.grey[200]
            }}
          >
            Sign Up
          </Button>
        </Box>

        {/* BUG -  */}
        <Box
          sx={{
            position: 'absolute',
            left: !signInSignUp ? '50%' : '150%',
            opacity: !signInSignUp ? '1' : '0',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            padding: '0 4vh',
            transition: '0.3s'
          }}
        >
          <SignInForm />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            left: signInSignUp ? '50%' : '-50%',
            opacity: signInSignUp ? '1' : '0',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            padding: '0 4vh',
            transition: '0.3s'
          }}
        >
          <SignUpForm />
        </Box>
      </Box>
    </>
  )
}

export default ColumnRight
