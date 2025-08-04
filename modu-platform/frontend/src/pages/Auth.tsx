// src/pages/Auth.tsx
import React, { useState } from 'react';

export const Auth: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch('https://ideal-trout-wrx945469wqwhg696-8000.app.github.dev/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token); // 保存 token
        setMessage(`✅ 登录成功！Token: ${data.token}`);
      } else {
        setMessage(data.error || '登录失败');
      }
    } catch (err) {
      setMessage('⚠️ 请求失败，后端没启动？');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">登录</h2>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="密码"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        登录
      </button>
      <p className="mt-4 text-red-600">{message}</p>
    </div>
  );
};
