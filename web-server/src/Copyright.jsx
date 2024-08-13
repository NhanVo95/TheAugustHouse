// import * as React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export default function Copyright() {
  const year = 2024
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        NhanVo
      </Link>{' '}
      {year}.
    </Typography>
  )
}