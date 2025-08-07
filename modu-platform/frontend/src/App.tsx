
// app.tsx
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// App.tsx 中
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { Admin } from './pages/Admin';




function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState<string | null>(null)

  // 检查是否登录
  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('username')
    if (token && user) {
      setUsername(user)
    }
  }, [])

  return (
    <>
     
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      {/* ✅ 登录信息 */}
      {username ? (
        <p className="text-green-600">已登录用户：{username}</p>
      ) : (
        <p className="text-gray-500">未登录</p>
      )}

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>

  )
}

export default App
