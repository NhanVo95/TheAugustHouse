import * as React from 'react'

import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCollapsed } from '~/redux/features/sidebar/sidebarSlice'

import { useTheme } from '@emotion/react'
import { colorTokens } from '~/customLibraries/color'

import TopBar from '~/components/DashboardContent/TopBar'
import SideBar from '~/components/DashboardContent/SideBar'

import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'

import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

const dashboardLayout = () => {
  return (
    <>
      <Box sx={{ height: '100%', width: '100vw', display: 'flex', gap: 1 }}>
        {/* SIDEBAR */}
        <SideBar />

        <Box sx={{ width: '100%', gap: 1 }}>
          {/* TOP BAR */}
          <TopBar />

          {/* CONTENT */}
          <Box sx={{ width: '100%' }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default dashboardLayout
