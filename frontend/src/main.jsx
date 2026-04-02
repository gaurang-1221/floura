import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from './context/AuthContext'
import { BlogProvider } from './context/BlogContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <BlogProvider>
           <App />
        </BlogProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)