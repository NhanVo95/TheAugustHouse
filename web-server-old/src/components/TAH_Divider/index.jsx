import { hexToRgba } from '~/utilities/hexToRgba'

import Divider from '@mui/material/Divider'

const dividerStyle = {
  flexShrink: '0',
  borderTop: '0px solid rgba(0, 0, 0, 0.08)',
  borderRight: '0px solid rgba(0, 0, 0, 0.08)',
  borderLeft: '0px solid rgba(0, 0, 0, 0.08)',
  height: '0.0625rem',
  margin: '1rem 0px',
  borderBottom: 'none',
  opacity: '0.25',
  backgroundColor: 'transparent',
  backgroundImage: `linear-gradient(to right, ${hexToRgba(
    '#0075FF',
    0
  )} , rgb(255, 255, 255), rgba(255, 255, 255, 0)) !important`
}

const TAH_Divider = () => {
  return (
    <>
      <Divider sx={dividerStyle} />
    </>
  )
}

export default TAH_Divider
