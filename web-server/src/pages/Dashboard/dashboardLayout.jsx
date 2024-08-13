import { Outlet } from 'react-router-dom'

import TopBar from '~/components/TopBar'
import SideBar from '~/components/SideBar'
import HeaderContent from '~/components/HeaderContent'
import { Box } from '@mui/material'

export default function DashboardLayout() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          height: '100%',
          width: '100%'
        }}
      >
        <SideBar />
        <Box sx={{ height: '100%', width: '100%' }}>
          <TopBar />
          <Box m="20px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <HeaderContent
                title="DASHBOARD"
                subtitle="Welcome to your Dashboard"
              />
            </Box>

            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  )
}
