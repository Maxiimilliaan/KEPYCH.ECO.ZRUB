import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Replace any stale cached tab favicon with the compass icon
const compassUrl = '/safari-compass.png?v=compass1';
document.querySelectorAll("link[rel*='icon']").forEach(el => {
  el.href = compassUrl;
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
