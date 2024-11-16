'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/redux/store'
import { setSignInSignUp } from '~/redux/features/signInSignUp/signInSignUpSlice'

import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

import TAH_Button from '~/components/TAH_Components/TAH_Button'

function ColumnRight() {
  const dispatch = useDispatch()
  const signInSignUp = useSelector(
    (state: RootState) => state.signInSignUp.selected
  )

  return (
    <>
      <div className='relative w-full tablet:w-2/5 p-5 overflow-hidden text-white'>
        <div className='flex justify-center gap-5 mt-5'>
          <TAH_Button
            selected={!signInSignUp}
            label='Sign In'
            onClick={() => {
              dispatch(setSignInSignUp(false))
            }}
          />
          <TAH_Button
            selected={signInSignUp}
            label='Sign Up'
            onClick={() => {
              dispatch(setSignInSignUp(true))
            }}
          />
        </div>

        {/* BUG -  */}
        <div
        // sx={{
        //   position: 'absolute',
        //   left: !signInSignUp ? '50%' : '150%',
        //   opacity: !signInSignUp ? '1' : '0',
        //   transform: 'translateX(-50%)',
        //   display: 'flex',
        //   flexDirection: 'column',
        //   alignItems: 'center',
        //   width: '100%',
        //   padding: '0 4vh',
        //   transition: '0.3s'
        // }}
        >
          {/* <SignInForm /> */}
        </div>

        <div
        // sx={{
        //   position: 'absolute',
        //   left: signInSignUp ? '50%' : '-50%',
        //   opacity: signInSignUp ? '1' : '0',
        //   transform: 'translateX(-50%)',
        //   display: 'flex',
        //   flexDirection: 'column',
        //   alignItems: 'center',
        //   width: '100%',
        //   padding: '0 4vh',
        //   transition: '0.3s'
        // }}
        >
          {/* <SignUpForm /> */}
        </div>
      </div>
    </>
  )
}

export default ColumnRight
