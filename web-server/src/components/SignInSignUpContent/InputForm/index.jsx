import { Controller } from 'react-hook-form'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'

function Input({ id, label, control, errors, register }) {
  return (
    <Controller
      name={id}
      control={control}
      render={({ field }) => (
        <Box>
          <TextField
            {...register(id)}
            type={id === 'password' ? 'password' : 'text'}
            fullWidth
            id={id}
            label={label}
            defaultValue={field.value}
            variant="filled"
            aria-describedby={`component-error-${id}`}
            sx={{
              '& .MuiFilledInput-root': {
                '& > fieldset': { border: '1px solid green' }
              }
            }}
          />
          <FormHelperText id={`component-error-${id}`}>
            {errors[`${id}`]?.message}
          </FormHelperText>
        </Box>
      )}
    />
  )
}

export default Input
