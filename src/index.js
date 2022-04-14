import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./style.css"
import 'mapbox-gl/dist/mapbox-gl.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


