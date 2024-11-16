import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema, FormData } from '~/utilities/validation/form'
import TAH_Input from '~/components/TAH_Components/TAH_Input'

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TAH_Input
        id='email'
        label='Email'
        type='email'
        {...register('email')}
        error={errors.email?.message}
      />
      <TAH_Input
        id='password'
        label='Password'
        type='password'
        {...register('password')}
        error={errors.password?.message}
      />
      <button type='submit'>Sign In</button>
    </form>
  )
}

export default SignInForm
