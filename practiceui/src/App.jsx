import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePages/homePage';
import WeiMan from './Pages/DetailPages/ChangChun/WeiMan';
import LunXian from './Pages/DetailPages/ChangChun/LunXian';
import JingYvGanBu from './Pages/DetailPages/TongHua/JingYvGanBu';
import JingYvLingYuan from './Pages/DetailPages/TongHua/JingYvLingYuan';
import JingYvLieShi from './Pages/DetailPages/BaiShan/JingYvLieShi';
import SiBao from './Pages/DetailPages/BaiShan/SiBao';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 首页路由 */}
          <Route path="/" element={<HomePage />} />
          
          {/* 长春地区详情页路由 */}
          <Route path="/detail/changchun/weiman" element={<WeiMan />} />
          <Route path="/detail/changchun/lunxian" element={<LunXian />} />
          
          {/* 通化地区详情页路由 */}
          <Route path="/detail/tonghua/jingyvganbu" element={<JingYvGanBu />} />
          <Route path="/detail/tonghua/jingyvlingyuan" element={<JingYvLingYuan />} />

          {/* 白山地区详情页路由 */}
          <Route path="/detail/baishan/jingyvlieshi" element={<JingYvLieShi />} />
          <Route path="/detail/baishan/sibao" element={<SiBao />} />

          {/* 404页面 - 可选 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// 简单的404页面组件
function NotFound() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '100px 20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '20px' }}>
        页面未找到
      </h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        抱歉，您访问的页面不存在。
      </p>
      <a 
        href="/" 
        style={{ 
          color: '#007bff', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '1px solid #007bff',
          borderRadius: '5px',
          transition: 'all 0.3s ease'
        }}
      >
        返回首页
      </a>
    </div>
  );
}

export default App;
