import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import appRouter from './routes/appRouter';
import {RouterProvider} from 'react-router-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}>
       <App/>
  </RouterProvider>
  );

