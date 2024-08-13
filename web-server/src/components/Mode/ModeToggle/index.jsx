import { useEffect } from 'react'
import { useColorScheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMode } from '~/redux/features/mode/modeSlice'

import IconButton from '@mui/material/IconButton'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  const dispatch = useDispatch()

  const changedMode = useSelector(
    (state) => state.mode.mode
  )

  const handleChange = () => {
    dispatch(toggleMode())
  }

  useEffect(() => {
    setMode(changedMode)
  }, [changedMode, setMode])

  return (
    <IconButton
      type="button"
      sx={{ p: 1 }}
      onClick={handleChange}
    >
      {mode === 'dark' ? (
        <DarkModeOutlinedIcon />
      ) : (
        <LightModeOutlinedIcon />
      )}
    </IconButton>
  )
}

export default ModeToggle
