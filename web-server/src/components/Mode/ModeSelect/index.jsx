import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useColorScheme } from '@mui/material'
import { changeMode } from '~/redux/features/mode/modeSlice'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const dispatch = useDispatch()

  const changedMode = useSelector(
    (state) => state.mode.mode
  )

  const handleChange = (event) => {
    const selectedMode = event.target.value

    dispatch(changeMode(selectedMode))
  }

  useEffect(() => {
    setMode(changedMode)
  }, [changedMode, setMode])

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel
        id="label-select-dark-mode"
        sx={{
          color: 'white',
          '&.Mui-focused': { color: 'white' }
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-mode"
        id="label-select-dark-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              borderColor: 'white'
            },
          '.MuiSvgIcon-root': { color: 'white' }
        }}
      >
        <MenuItem value="light">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <LightModeIcon fontSize="smal" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <DarkModeIcon fontSize="smal" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <SettingsBrightnessIcon fontSize="smal" />{' '}
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
