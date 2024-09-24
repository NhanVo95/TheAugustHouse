import { useSelector } from 'react-redux'

import { useTheme } from '@mui/material'
import { colorTokens } from '~/customLibraries/color'
import { hexToRgba } from '~/utilities/hexToRgba'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

const Item = (props) => {
  const theme = useTheme()
  const colors = colorTokens(theme.palette.mode)

  const isCollapsed = useSelector((state) => state.sidebar.collapsed)

  return (
    <Box>
      {props?.items.map((item, index) => {
        return (
          <Box key={item + index} sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              sx={{
                color: hexToRgba(colors.white, 0.5),
                flexShrink: '0',
                minWidth: '2rem',
                minHeight: '2rem',
                display: 'grid',
                boxShadow: `${hexToRgba(
                  colors.grey[900],
                  0.1
                )} 0rem 0.25rem 0.375rem -0.0625rem, ${hexToRgba(
                  colors.grey[900],
                  0.05
                )} 0rem 0.125rem 0.25rem -0.0625rem`,
                background: colors.purpleAccent[400],
                borderRadius: '0.75rem',
                placeItems: 'center',
                transition: 'margin 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              aria-label='add'
            >
              {item.icon}
            </IconButton>
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
