import { useEffect } from 'react'

import SignInSignUpContent from '~/components/SignInSignUpContent'

function SignInSignUp() {
  useEffect(() => {
    document.title = 'The August House - Sign in or Sign Up'
  }, [])

  return (
    <>
      <SignInSignUpContent />
    </>
  )
}

export default SignInSignUp
