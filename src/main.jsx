import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './Route/Router.jsx'

import { ToastContainer } from 'react-toastify'
import AuthProvider from './component/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
       <RouterProvider router ={router}></RouterProvider>
    <ToastContainer></ToastContainer>
   </AuthProvider>

  </StrictMode>,
)