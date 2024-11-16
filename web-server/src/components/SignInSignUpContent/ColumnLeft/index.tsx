'use client'

import { useSelector } from 'react-redux'
import type { RootState } from '~/redux/store'

const imageDefaultStyle = 'absolute left-0 top-0 w-[400px]'

function ColumnLeft() {
  const signInSignUp = useSelector((state: RootState) => state.signInSignUp.selected)

  return (
    <>
      {/* SECTION - Column 1 */}
      <div
        className={
          'hidden tablet:flex items-center justify-center flex-col w-2/4 bg-primary bg-opacity-30 backdrop-blur-xl transition-[border-radius] duration-300' +
          (signInSignUp
            ? ' rounded-tr-[30%] rounded-br-[20%]'
            : ' rounded-tr-[20%] rounded-br-[30%]')
        }
      >
        {/* SECTION - Image layer */}
        <div className='relative'>
          <img alt='white-outline' src='/white-outline.png' className='w-[400px] animate-scaleUp' />
          <img
            alt='white-outline'
            src='/dots.png'
            className={imageDefaultStyle + ' animate-scaleUp'}
          />
          <img
            alt='white-outline'
            src='/coin.png'
            className={imageDefaultStyle + ' animate-scaleDown'}
          />
          <img
            alt='white-outline'
            src='/spring.png'
            className={imageDefaultStyle + ' animate-scaleDown'}
          />
          <img
            alt='white-outline'
            src='/rocket.png'
            className={imageDefaultStyle + ' animate-upDown'}
          />
          <img
            alt='white-outline'
            src='/cloud.png'
            className={imageDefaultStyle + ' animate-leftRight'}
          />
          <img
            alt='white-outline'
            src='/stars.png'
            className={imageDefaultStyle + ' animate-scaleDown'}
          />
        </div>
        {/* !SECTION - Image layer */}

        <h3 className='text-center text-white w-[300px]'>
          {signInSignUp ? 'Welcome to' : 'Welcome back to'}
        </h3>
        <h2 className='text-center text-white text-4xl font-bold'>The August House</h2>
      </div>
      {/* !SECTION - Column 1 */}
    </>
  )
}

export default ColumnLeft
