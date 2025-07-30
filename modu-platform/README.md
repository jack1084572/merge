小完整 Linux 命令集合：构建前端为主的全栈项目（modu-platform）
💡 默认运行目录是你当前路径（建议创建在新文件夹中）
bash
复制
编辑
# 创建根目录
mkdir -p modu-platform

# -------------------------------
# 🌐 构建前端目录结构
# -------------------------------
mkdir -p modu-platform/frontend/public
mkdir -p modu-platform/frontend/src/{config,components,pages,modules/{Users,RecommendUsers,TrendingVideos}}

# 创建前端核心文件
touch \
  modu-platform/frontend/vite.config.ts \
  modu-platform/frontend/src/{App.tsx,main.tsx,ModuleLoader.tsx} \
  modu-platform/frontend/src/config/moduleRegistry.ts \
  modu-platform/frontend/src/pages/Home.tsx \
  modu-platform/frontend/src/modules/Users/index.tsx \
  modu-platform/frontend/src/modules/RecommendUsers/{index.tsx,styles.css,api.ts} \
  modu-platform/frontend/src/modules/TrendingVideos/index.tsx

# -------------------------------
# 🚀 构建后端目录结构
# -------------------------------
mkdir -p modu-platform/backend/app/{core,models,api/modules/{users,recommend_users,trending_videos}}

# 创建后端核心文件
touch \
  modu-platform/backend/app/main.py \
  modu-platform/backend/app/api/router.py \
  modu-platform/backend/app/api/modules/users/{routes.py,logic.py,schema.py} \
  modu-platform/backend/app/api/modules/recommend_users/{routes.py,logic.py,schema.py} \
  modu-platform/backend/app/api/modules/trending_videos/{routes.py,logic.py,schema.py} \
  modu-platform/backend/requirements.txt

# -------------------------------
# 📦 根目录文件
# -------------------------------
touch modu-platform/docker-compose.yml
touch modu-platform/README.md

echo "✅ 项目目录已构建完成"


🧪 可选：前端启动在 8080 的设置（Vite 默认是 5173）
你需要手动配置 vite.config.ts 加端口设置：

ts
复制
编辑
// modu-platform/frontend/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080
  }
})
🚀 前端启动流程
初始化 Vite + React + TypeScript 项目

bash
复制
编辑
cd modu-platform/frontend
npm create vite@latest . -- --template react-ts
替换掉 Vite 默认结构（因为你已经用命令生成了结构）

安装依赖 + 启动服务

bash
复制
编辑
npm install
npm run dev -- --host
浏览器访问：

arduino
复制
编辑
http://localhost:8080
✅ 最终目录回顾（前端重点）
bash
复制
编辑
modu-platform/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── ModuleLoader.tsx
│   │   ├── config/moduleRegistry.ts
│   │   ├── components/
│   │   ├── pages/Home.tsx
│   │   └── modules/
│   │       ├── Users/index.tsx
│   │       ├── RecommendUsers/{index.tsx, styles.css, api.ts}
│   │       └── TrendingVideos/index.tsx
│   └── vite.config.ts

三、启动开发服务器
bash
复制
编辑
npm run dev
访问 http://localhost:5173/，你会看到博客页面


想要的效果是：

运行的是你当前目录结构中的 Vite 项目

不是初始化新模板

使用 vite 启动你修改后的项目

后台运行

支持外部访问（例如在 Codespaces、服务器）

✅ 正确做法（命令版）
1. 确保你在前端目录里
bash
复制
编辑
cd modu-platform/frontend
2. 安装依赖（仅第一次需要）
bash
复制
编辑
npm install
3. 用 nohup 后台运行 Vite 开发服务器监听所有地址
bash
复制
编辑
nohup npm run dev -- --host > vite.log 2>&1 &
解释：

nohup：让服务在后台运行，即使关闭终端也继续运行。

-- --host：让 Vite 监听 0.0.0.0，使得外部能访问。

> vite.log 2>&1：将输出写入日志文件 vite.log。

&：放入后台运行。

故障排除 一定要 吧转发privacy改成public 以通过post请求

nohup python3 your_server.py > server.log 2>&1 &
