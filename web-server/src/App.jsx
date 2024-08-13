import { Navigate, Route, Routes } from 'react-router-dom'

import SignInSignUp from './pages/SignInSignUp'
// import DashboardLayout from './pages/Dashboard/dashboardLayout'
// import Dashboard from './pages/Dashboard'
// import Team from './pages/Dashboard/team'
// import Contact from './pages/Dashboard/contact'
// import Invoices from './pages/Dashboard/invoices'
// import Form from './pages/Dashboard/form'
// import Products from './pages/Dashboard/product'

// import BoardsLayout from '~/pages/Boards/boardsLayout'
// import Boards from '~/pages/Boards'
// import BoardId from '~/pages/Boards/_id'

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/login" replace={true} />} />

        <Route path="/login" element={<SignInSignUp />} />

        {/* <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >
          <Route index element={<Dashboard />} />
          <Route
            path="/dashboard/product"
            element={<Products />}
          />
          <Route
            path="/dashboard/team"
            element={<Team />}
          />
          <Route
            path="/dashboard/contact"
            element={<Contact />}
          />
          <Route
            path="/dashboard/invoices"
            element={<Invoices />}
          />
          <Route
            path="/dashboard/form"
            element={<Form />}
          />
        </Route>

        <Route path="/board" element={<BoardsLayout />}>
          <Route index element={<Boards />} />
          <Route path=":boardId" element={<BoardId />} />
        </Route> */}
      </Routes>
    </>
  )
}
