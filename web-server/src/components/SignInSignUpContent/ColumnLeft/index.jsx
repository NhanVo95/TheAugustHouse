import { useSelector } from 'react-redux'

import { useTheme, keyframes, useMediaQuery } from '@mui/material'
import { colorTokens } from '~/customLibraries/color'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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

const imageDefaultStyle = {
  position: 'absolute',
  left: '0',
  width: '400px'
}

function ColumnLeft() {
  const theme = useTheme()
  const colors = colorTokens(theme.palette.mode)
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const signInSignUp = useSelector((state) => state.signInSignUp.selected)

  return (
    <>
      {/* SECTION - Column 1 */}
      <Box
        sx={{
          display: isMobileScreen ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '55%',
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: signInSignUp ? '0 30% 20% 0' : '0 20% 30% 0',
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
          variant="h3"
          sx={{ textAlign: 'center', color: colors.white, width: '300px' }}
        >
          {signInSignUp ? 'Welcome to' : 'Welcome back to'}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: 'bold', color: colors.greenAccent[700] }}
        >
          The August House
        </Typography>
      </Box>
      {/* !SECTION - Column 1 */}
    </>
  )
}

export default ColumnLeft
