import React, { useState, useEffect } from 'react';
import './rollingDisplay.css';
import picture1 from '../../assets/rollingPicture/picture1.jpg';
import picture2 from '../../assets/rollingPicture/picture2.jpg';
import picture3 from '../../assets/rollingPicture/picture3.jpg';

function RollingDisplay() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // 轮播图片数据
    const slides = [
        {
            id: 1,
            image: picture1,
            title: '不忘初心',
            subtitle: '小学生参加纪念馆活动'
        },
        {
            id: 2,
            image: picture2,
            title: '红色故事大赛',
            subtitle: '讲述红色故事，传承红色基因'
        },
        {
            id: 3,
            image: picture3,
            title: '胜利之门',
            subtitle: '胜利之门塑造红色精神'
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