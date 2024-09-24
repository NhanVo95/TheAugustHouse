import RequireAuthContent from '~/components/RequireAuthContent'

function RequireAuth({ allowedRoles }) {
  return <RequireAuthContent allowedRoles={allowedRoles} />
}

export default RequireAuth
