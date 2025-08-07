import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import { Admin } from './pages/Admin';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>   
     <BrowserRouter>
    <App />
    <Home />

     <Auth />  {/* 渲染登录组件 */}
     <Admin />
    </BrowserRouter>
   
  </React.StrictMode>
);
