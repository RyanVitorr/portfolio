import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import { Global } from './componentes/componentesStyle/Global.style.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
)
