import { useTheme } from '@mui/material'
import { colorTokens } from '~/customLibraries/color'

import ModeToggle from '~/components/Mode/ModeToggle'
import TAH_Breadcrumbs from '~/components/TAH_Breadcrumbs'

import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

const topBarHeight = '40px'

const TopBar = () => {
  const theme = useTheme()
  const colors = colorTokens(theme.palette.mode)

  return (
    <>
      <Box
        sx={{
          width: '100%',
          padding: '15px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Breadcrumbs */}
        <TAH_Breadcrumbs label={['Home', 'Dashboard']} selected={'Dashboard'} />

        {/* Icon */}
        <Box sx={{ display: 'flex' }}>
          {/* Search Bar */}
          <Box sx={{ display: 'flex', backgroundColor: colors.primary[400], borderRadius: '10px' }}>
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
            <IconButton type='button' sx={{ p: 1 }}>
              <SearchOutlinedIcon />
            </IconButton>
          </Box>

          <ModeToggle />

          <IconButton>
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>

          <IconButton>
            <PersonOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  )
}

export default TopBar
