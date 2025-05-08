import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './Context/AdminContext.jsx'
import DoctorContextProvider from './Context/DoctorContext.jsx'
import AppcontextProvider from './Context/Appcontext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <DoctorContextProvider>
        <AppcontextProvider>
          <App />
        </AppcontextProvider>
      </DoctorContextProvider>
    </AdminContextProvider>

  </BrowserRouter>,
)
