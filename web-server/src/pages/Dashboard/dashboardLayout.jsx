import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

export default function DashboardLayout() {
  return (
    <>
      <Box>
        <Outlet />
      </Box>
    </>
  )
}
