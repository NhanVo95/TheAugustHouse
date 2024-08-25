import { useTheme, useMediaQuery } from '@mui/material'

import Box from '@mui/material/Box'

import ColumnLeft from './ColumnLeft'
import ColumnRight from './ColumnRight'

function SignInSignUpContent() {
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  // SECTION - Return
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
          <ColumnLeft />

          <ColumnRight />
        </Box>
        {/* !SECTION - Form container */}
      </Box>
    </>
  )
  // !SECTION - Return
}

export default SignInSignUpContent
