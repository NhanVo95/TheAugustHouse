import env from '~/utilities/env'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSelected } from '~/redux/features/sidebar/sidebarSlice'

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

const SideBar = () => {
  const theme = useTheme()
  const colors = colorTokens(theme.palette.mode)
  const dispatch = useDispatch()

  const [toggled, setToggled] = useState(false)
  const [broken, setBroken] = useState(false)
  const rtl = false

  const isCollapsed = useSelector((state) => state.sidebar.collapsed)

  const handleClick = (events) => {
    dispatch(setSelected({ selected: events.currentTarget.innerText }))
  }

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
        <Item items={[{ label: 'Dashboard', icon: <DashboardOutlinedIcon /> }]} />
      </Box>
    </>
  )
}

export default SideBar
