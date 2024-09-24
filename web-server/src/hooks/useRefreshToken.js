import { useDispatch } from 'react-redux'
import { setToken } from '~/redux/features/auth/authSlice'
import { refreshToken } from '~/apis'

async function useRefreshToken() {
  const dispatch = useDispatch()
  const response = await refreshToken()

  dispatch(setToken(response))

  return <div>useRefreshToken</div>
}

export default useRefreshToken
