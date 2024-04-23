import React from 'react';
import MainRoutes from "./route.jsx"
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom/client"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
)
