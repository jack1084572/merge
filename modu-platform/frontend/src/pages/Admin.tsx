import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Admin: React.FC = () => {
  const navigate = useNavigate();

  // 登录状态验证，未登录跳转到 /auth
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth'); // ✅ 修正为绝对路径
    }
  }, [navigate]);

  const openAdminHtml = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('未登录，无法打开管理页面');
      navigate('/auth');
      return;
    }

    // ✅ 直接打开已有的 Admin.html 页面
    window.open('https://ideal-trout-wrx945469wqwhg696-5173.app.github.dev/Admin.html', '_blank');
  };

  return (
    <div>
      <button onClick={openAdminHtml} style={{ padding: '10px 20px', fontSize: 16 }}>
        在新窗口打开 Admin.html 页面
      </button>
    </div>
  );
};
