import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import ContexSuplier from './components/AuthProvider/ContexSuplier';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContexSuplier>

      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </ContexSuplier>
  </React.StrictMode>,
)
