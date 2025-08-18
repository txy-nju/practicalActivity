@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================
echo       东北红色文化网站
echo ========================================
echo.

:: 检查 Node.js
where node >nul 2>&1
if %errorLevel% neq 0 (
    echo ❌ 需要安装 Node.js
    echo 📥 请访问 https://nodejs.org 下载安装
    echo.
    pause
    exit /b 1
)

:: 检查依赖
if not exist "node_modules" (
    echo 📦 首次运行，正在安装依赖...
    npm install
    if %errorLevel% neq 0 (
        echo ❌ 依赖安装失败
        pause
        exit /b 1
    )
)

:: 启动服务器
echo 🚀 启动网站...
node server.js
