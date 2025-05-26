import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './App1';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';          // ✅ Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js';     // ✅ Bootstrap JS
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App1 />
    </BrowserRouter>
  </React.StrictMode>
);
