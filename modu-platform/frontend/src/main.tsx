import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';  // 添加此行

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Home />
    <Auth />  {/* 渲染登录组件 */}
  </StrictMode>
);
