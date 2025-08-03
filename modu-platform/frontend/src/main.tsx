import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Auth } from './pages/Auth';  // 用花括号导入命名导出
import { Home } from './pages/Home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Home />
    <Auth />
  </StrictMode>
);
