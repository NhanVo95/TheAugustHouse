import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const SidebarFooter = () => {
  const isCollapsed = useSelector((state) => state.sidebar.collapsed)

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <Box>
          <Typography variant='body2'>
            {isCollapsed
              ? '\u00A9 2024 The August Home'
              : '\u00A9 2024 The August Home. All rights reserved.'}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default SidebarFooter
