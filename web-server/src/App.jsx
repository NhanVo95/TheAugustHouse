import { Navigate, Route, Routes } from 'react-router-dom'

import env from '~/utilities/env'

import PageNotFound from './pages/PageNotFound'
import RequireAuth from './pages/RequireAuth'
import SignInSignUp from './pages/SignInSignUp'
import DashboardLayout from './pages/Dashboard/dashboardLayout'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route index element={<Navigate to='/login' replace={true} />} />

        <Route path='/login' element={<SignInSignUp />} />

        {/* Private */}
        {/* <Route element={<RequireAuth allowedRoles={[env.ROLES_RULE.User]} />}></Route> */}

        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path=":boardId" element={<BoardId />} /> */}
        </Route>

        {/* Catch all */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}
