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
        </div>
    );
}

export default HomePage;