#!/bin/bash

echo "========================================"
echo "       东北红色文化网站"
echo "========================================"
echo

# 切换到脚本目录
cd "$(dirname "$0")"

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 需要安装 Node.js"
    echo "📥 请访问 https://nodejs.org 下载安装"
    exit 1
fi

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo "📦 首次运行，正在安装依赖..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ 依赖安装失败"
        exit 1
    fi
fi

# 启动服务器
echo "🚀 启动网站..."
node server.js
