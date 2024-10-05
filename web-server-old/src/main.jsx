// import * as React from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import App from '~/App'
import theme from '~/theme'

import { Provider } from 'react-redux'
import store from './redux/store'

import { ToastContainer, Slide } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <CssVarsProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
        <ToastContainer theme="colored" autoClose={3000} closeOnClick transition={Slide} />
      </Provider>
    </BrowserRouter>
  </CssVarsProvider>
)
