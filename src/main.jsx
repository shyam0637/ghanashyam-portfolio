import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // This imports your portfolio component

// This code starts React and renders your App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);