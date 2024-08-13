import { useDispatch } from 'react-redux'
import { setTitle } from '~/redux/features/title/titleSlice'

import DashboardContent from '~/components/DashboardContent'

function Dashboard() {
  const dispatch = useDispatch()

  dispatch(
    setTitle({
      title: 'Dashboard',
      subtitle: 'Welcome to your Dashboard'
    })
  )

  return <DashboardContent />
}

export default Dashboard
