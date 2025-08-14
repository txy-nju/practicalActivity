import React from 'react';
import Header from './header';
import RollingDisplay from './rollingDisplay';
import Volumn from './volumn';
import './homePage.css'; // 确保引入样式文件

function HomePage() {
    return (
        <div className="homepage">
            <Header />
            <RollingDisplay />
            <Volumn />
            <main className="main-content">
                <h2>欢迎来到首页</h2>
                <p>这里是首页的内容</p>
            </main>
        </div>
    );
}

export default HomePage;