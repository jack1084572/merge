import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, './pages/Admin.html')
      }
    }
  },
  server: {
    fs: {
      allow: ['.'],
    },
    // 用这个选项来关闭 HTML fallback（等价于 historyApiFallback: false）
    middlewareMode: false
  }
})
