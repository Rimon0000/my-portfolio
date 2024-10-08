import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='overflow-hidden bg-base-100'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
