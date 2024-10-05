import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'

function PageNotFound() {
  return (
    <>
      <Box />
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>

        <p>
          Go to the <Link to="/">Homepage</Link>.
        </p>
      </div>
    </>
  )
}

export default PageNotFound
