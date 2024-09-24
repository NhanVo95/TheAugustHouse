import { jwtDecode } from 'jwt-decode'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

import useAuth from '~/hooks/useAuth'

function RequireAuthContent({ allowedRoles }) {
  let isAuthenticate = false
  const user = useAuth()
  const location = useLocation()

  if (user?.role?.split(',').find((role) => allowedRoles?.includes(role))) {
    const accessToken = user.accessToken

    if (accessToken) {
      const decodedAccessToken = jwtDecode(accessToken)
      const currentTime = Date.now() / 1000 // Convert to seconds

      if (decodedAccessToken.exp > currentTime) {
        isAuthenticate = true
      } else {
        isAuthenticate = false
        // Optionally, handle token refresh or redirect to login
      }
    }
  }

  return isAuthenticate ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
}

export default RequireAuthContent
