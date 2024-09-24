import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useTheme } from '@mui/material'
import { colorTokens } from '~/customLibraries/color'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

function DashboardContent() {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <h1>Dashboard</h1>
      </Box>
    </>
  )
}

export default DashboardContent
