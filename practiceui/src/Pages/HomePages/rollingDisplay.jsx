import React, { useState, useEffect } from 'react';
import './rollingDisplay.css';
import weiman from '../../assets/rollingPicture/weiman.webp';
import lunxian from '../../assets/rollingPicture/lunxian.webp';
import jingyvganbu from '../../assets/rollingPicture/jingyvganbu.jpg';
import jingyvlinyuan from '../../assets/rollingPicture/jingyvlinyuan.webp';
function RollingDisplay() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // 轮播图片数据
    const slides = [
        {
            id: 1,
            image: weiman,
            title: '伪满皇宫',
            subtitle: '历史记忆'
        },
        {
            id: 2,
            image: lunxian,
            title: '东北沦陷史陈列馆',
            subtitle: '血泪的教训'
        },
        {
            id: 3,
            image: jingyvganbu,
            title: '杨靖宇干部学院',
            subtitle: '杨靖宇将军的生平'
        },
        {
            id: 4,
            image: jingyvlinyuan,
            title: '杨靖宇',
            subtitle: '缅怀革命先烈'
        }
    ];

    // 自动轮播
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(timer);
    }, [slides.length]);

    // 获取相对于当前索引的位置
    const getSlideClass = (slideIndex) => {
        if (slideIndex === currentIndex) return 'active';
        if (slideIndex === (currentIndex - 1 + slides.length) % slides.length) return 'prev';
        if (slideIndex === (currentIndex + 1) % slides.length) return 'next';
        return 'hidden';
    };

    // 添加调试信息
    console.log('Current index:', currentIndex);
    console.log('Slides mapping:', slides.map((slide, index) => ({
        index,
        title: slide.title,
        class: getSlideClass(index)
    })));

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="rolling-display">
            <div className="slides-container">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${getSlideClass(index)}`}
                        style={{ 
                            backgroundImage: `url(${slide.image})`
                        }}
                    >
                        <div className="slide-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 导航箭头 */}
            <button className="nav-btn prev-btn" onClick={prevSlide}>
                <span>‹</span>
            </button>
            <button className="nav-btn next-btn" onClick={nextSlide}>
                <span>›</span>
            </button>

            {/* 底部指示器 */}
            <div className="indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default RollingDisplay;