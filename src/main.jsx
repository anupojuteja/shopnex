import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App1 from './App1';
// import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Add this line
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App1/>
    </BrowserRouter>
  </React.StrictMode>
);
