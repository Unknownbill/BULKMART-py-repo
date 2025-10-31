import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { AuthProvider } from './hooks/useAuth';
import App from './App'; // Assuming App.tsx contains the routing logic

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)