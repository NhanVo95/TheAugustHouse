import env from '~/utilities/env'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useTheme } from '@mui/material'
import { colorTokens } from '~/customLibraries/color'

import SidebarHeader from './SidebarHeader'
import SidebarFooter from './SidebarFooter'
import Item from './Item'
import TAH_Divider from '~/components/TAH_Divider'

import Box from '@mui/material/Box'

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'

const sidebarWidth = env.SIDEBAR_WIDTH

const TAH_SideBar = () => {
  const theme = useTheme()
  const colors = colorTokens(theme.palette.mode)

  const isCollapsed = useSelector((state) => state.sidebar.collapsed)

  return (
    <>
      <Box
        sx={{
          width: isCollapsed ? '80px' : sidebarWidth,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'width 1s',
          padding: '0 20px'
        }}
      >
        <SidebarHeader />
        <TAH_Divider />
        <Item
          items={[
            { label: 'Dashboard', icon: <DashboardOutlinedIcon /> },
            { label: 'Charts', icon: <BarChartOutlinedIcon /> }
          ]}
        />
      </Box>
    </>
  )
}

export default TAH_SideBar
