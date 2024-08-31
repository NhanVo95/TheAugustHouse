import env from '~/utilities/env'
import axios from 'axios'

const API_ROOT = env.API_ROOT

//SECTION - User
export const createNewUserAPI = async (newUserData) => {
  const options = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
  }

  return await axios
    .post(`${API_ROOT}/v1/user/signup`, newUserData, options)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        return error.response.data
      }
    })
}

export const loginUserAPI = async (UserData) => {
  const options = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
  }

  return await axios
    .post(`${API_ROOT}/v1/user/signin`, UserData, options)
    .then((response) => response.data)
    .catch((error) => {
      if (!error?.response) {
        return 'No Server Response'
      } else if (error.response?.status === 400) {
        return 'Missing Username or Password'
      } else if (error.response?.status === 401) {
        return 'Unauthorized'
      } else {
        return 'Login Failed'
      }
    })
}

//!SECTION - User
