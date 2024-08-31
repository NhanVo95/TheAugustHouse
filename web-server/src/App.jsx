import { Navigate, Route, Routes } from 'react-router-dom'

import SignInSignUp from './pages/SignInSignUp'

import DashboardLayout from './pages/Dashboard/dashboardLayout'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/login" replace={true} />} />

        <Route path="/:signInSignUp" element={<SignInSignUp />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path=":boardId" element={<BoardId />} /> */}
        </Route>
      </Routes>
    </>
  )
}
