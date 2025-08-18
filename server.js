const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const PORT = process.env.PORT || 3000;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'practiceui/dist')));

// 处理 React Router 的路由
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'practiceui/dist/index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log('========================================');
  console.log('🚀 东北红色文化网站已启动！');
  console.log(`📱 访问地址: http://localhost:${PORT}`);
  console.log('🛑 按 Ctrl+C 停止服务器');
  console.log('========================================');
  
  // 自动打开浏览器
  open(`http://localhost:${PORT}`);
});

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n🎉 服务器已停止');
  process.exit(0);
});
