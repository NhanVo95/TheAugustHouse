import { useNavigate, useLocation } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { setSelected } from '~/redux/features/sidebar/sidebarSlice'

import { useTheme } from '@mui/material'
import { colorTokens } from '~/customLibraries/color'
import { hexToRgba } from '~/utilities/hexToRgba'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Item = (props) => {
  const theme = useTheme()
  const colors = colorTokens(theme.palette.mode)

  const location = useLocation()
  const navigate = useNavigate()
  const from = location.pathname || '/'

  const dispatch = useDispatch()

  const isCollapsed = useSelector((state) => state.sidebar.collapsed)
  const isSelected = useSelector((state) => state.sidebar.selected)

  const handleClick = (events) => {
    dispatch(setSelected({ selected: events.currentTarget.innerText }))
    navigate(`${from}#`)
  }

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: hexToRgba(colors.white, 0.5),
    minWidth: '2rem',
    minHeight: '2rem',
    background: colors.primary[400],
    borderRadius: '0.75rem',
    transition: 'margin 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      color: hexToRgba(colors.white, 0.5),
      background: colors.primary[400]
    }
  }

  const buttonSelectedStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: hexToRgba(colors.white, 0.75),
    minWidth: '2rem',
    minHeight: '2rem',
    background: colors.purpleAccent[400],
    borderRadius: '0.75rem',
    transition: 'margin 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      color: hexToRgba(colors.white, 0.75),
      background: colors.purpleAccent[400]
    }
  }

  return (
    <Box>
      {props?.items.map((item, index) => {
        return (
          <Box
            key={item + index}
            onClick={handleClick}
            sx={{
              cursor: 'pointer',
              marginBottom: 2,
              padding: 1,
              display: 'flex',
              alignItems: 'center',
              borderRadius: '0.75rem',
              backgroundColor:
                isSelected == item.label ? hexToRgba(colors.white, 0.2) : 'transparent',
              '&:hover': {
                backgroundColor: hexToRgba(colors.white, 0.2)
              }
            }}
          >
            <Box sx={isSelected == item.label ? buttonSelectedStyle : buttonStyle}>{item.icon}</Box>

            <Typography sx={{ display: isCollapsed ? 'none' : 'flex', marginLeft: '5px' }}>
              {item.label}
            </Typography>
          </Box>
        )
      })}
    </Box>
  )
}

export default Item
