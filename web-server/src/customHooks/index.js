import { useState } from 'react'

function useAuthenticated(initialValue = false) {
  const [auth, setAuth] = useState(initialValue)
}
