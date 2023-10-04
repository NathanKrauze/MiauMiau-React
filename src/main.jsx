import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { GlobalStyle } from './style/GlobalStyle.js';
import { GlobalReset } from './style/GlobalReset.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalReset/>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
