import { useTheme } from '@mui/material'
import { colorTokens } from '~/customLibraries/color'

import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import HomeIcon from '@mui/icons-material/Home'

const TAH_Breadcrumbs = (props) => {
  const theme = useTheme()
  const colors = colorTokens(theme.palette.mode)

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        {props?.label.map((item, index) => {
          return item == 'Home' ? (
            <Box
              key={`${item}${index}`}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <IconButton href={'/'}>
                <HomeIcon color={colors.grey[100]} />
              </IconButton>

              <Typography>/</Typography>
            </Box>
          ) : index === props?.label.length - 1 ? (
            <Box key={`${item}${index}`} sx={{ color: colors.grey[100] }}>
              <Typography>{item}</Typography>
            </Box>
          ) : (
            <Box key={`${item}${index}`} sx={{ display: 'flex', gap: 1 }}>
              <Link href='#' underline='hover' sx={{ color: colors.grey[100] }}>
                <Typography>{item}</Typography>
              </Link>

              <Typography>/</Typography>
            </Box>
          )
        })}
      </Box>

      <Box>
        <Typography variant='h5' fontWeight={800}>
          {props?.selected}
        </Typography>
      </Box>
    </Box>
  )
}

export default TAH_Breadcrumbs
