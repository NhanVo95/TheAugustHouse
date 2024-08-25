/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom'

function _id() {
  let { id } = useParams()
  return <div>_id</div>
}

export default _id
