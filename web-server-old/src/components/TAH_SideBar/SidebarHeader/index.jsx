import { useDispatch, useSelector } from 'react-redux'
import { setCollapsed } from '~/redux/features/sidebar/sidebarSlice'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

const SidebarHeader = () => {
  const dispatch = useDispatch()

  const isCollapsed = useSelector((state) => state.sidebar.collapsed)

  const handleClick = () => {
    dispatch(setCollapsed({ collapsed: !isCollapsed }))
  }

  return (
    <>
      <Box
        sx={{
          height: '80px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden',
            flexDirection: isCollapsed ? 'column' : 'row',
            gap: '4px'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                color: 'white',
                fontSize: '24px',
                fontWeight: '700',
                backgroundColor: '#009fdb',
                background: 'linear-gradient(45deg, #1557cd 0%, #5affff 100%)',
                margin: '0 4px'
              }}
            >
              A
            </Box>

            <Typography
              display={isCollapsed ? 'none' : 'block'}
              variant='h5'
              fontWeight={'700'}
              color={'#0098e5'}
              sx={{
                marginLeft: '4px'
              }}
            >
              The August Home
            </Typography>
          </Box>

          <Box sx={{ display: 'none' }}>
            <IconButton onClick={handleClick}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SidebarHeader
