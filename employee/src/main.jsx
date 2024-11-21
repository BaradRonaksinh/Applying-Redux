import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Empstore from './redux/Empstore.js'

createRoot(document.getElementById('root')).render(
  <Provider store={Empstore}>
    <App />
  </Provider>
)