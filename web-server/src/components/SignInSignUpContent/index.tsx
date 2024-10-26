import ColumnLeft from '~/components/SignInSignUpContent/ColumnLeft'
import ColumnRight from './ColumnRight'

function SignInSignUpContent() {
  return (
    <>
      <div className='bg-signInSignUp bg-center bg-cover bg-fixed bg-no-repeat min-h-screen flex items-center justify-center px-0 py-5'>
        <div className='flex w-[400px] tablet:w-[1000px] min-w-96 h-[600px] border-4 border-primary border-opacity-30 rounded-3xl backdrop-blur-xl overflow-hidden'>
          <ColumnLeft />
          <ColumnRight />
        </div>
      </div>
    </>
  )
}

export default SignInSignUpContent
