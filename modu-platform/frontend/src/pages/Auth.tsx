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
      setMessage(data.message || data.error);
    } catch {
      setMessage('请求失败，请检查服务器是否启动');
    }
  };

  const handleRegister = async () => {
    try {
      const res = await fetch('https://ideal-trout-wrx945469wqwhg696-8000.app.github.dev/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      setMessage(data.message || data.error);
    } catch {
      setMessage('请求失败，请检查服务器是否启动');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">登录 / 注册</h2>
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
      <div className="flex gap-2">
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
          登录
        </button>
        <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 rounded">
          注册
        </button>
      </div>
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
};
