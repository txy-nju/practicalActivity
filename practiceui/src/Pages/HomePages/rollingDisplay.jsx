import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './rollingDisplay.css';
import weiman from '../../assets/rollingPicture/weiman.webp';
import lunxian from '../../assets/rollingPicture/lunxian.webp';
import jingyvganbu from '../../assets/rollingPicture/jingyvganbu.jpg';
import jingyvlinyuan from '../../assets/rollingPicture/jingyvlinyuan.webp';
import jingyvlieshi from '../../assets/rollingPicture/jingyvlieshi.webp';
import sibao from '../../assets/rollingPicture/sibao.webp';

function RollingDisplay() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate(); // React Router 导航钩子
    
    // 轮播图片数据 - 添加跳转路径
    const slides = [
        {
            id: 1,
            image: weiman,
            title: '伪满皇宫',
            subtitle: '历史记忆',
            path: '/detail/changchun/weiman' // 添加跳转路径
        },
        {
            id: 2,
            image: lunxian,
            title: '东北沦陷史陈列馆',
            subtitle: '血泪的教训',
            path: '/detail/changchun/lunxian' // 添加跳转路径
        },
        {
            id: 3,
            image: jingyvganbu,
            title: '杨靖宇干部学院',
            subtitle: '杨靖宇将军的生平',
            path: '/detail/tonghua/jingyvganbu' // 添加跳转路径
        },
        {
            id: 4,
            image: jingyvlinyuan,
            title: '靖宇陵园',
            subtitle: '缅怀革命先烈',
            path: '/detail/tonghua/jingyvlingyuan'
        },
        {
            id: 5,
            image: jingyvlieshi,
            title: '白山杨靖宇烈士陵园',
            subtitle: '追忆革命先烈的脚步',
            path: '/detail/baishan/jingyvlieshi'
        },
        {
            id: 6,
            image: sibao,
            title: '四保临江战役纪念馆',
            subtitle: '红色教育基地',
            path: '/detail/baishan/sibao'
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

    // 点击轮播图跳转到详情页
    const handleSlideClick = (slide) => {
        if (slide.path) {
            navigate(slide.path);
        }
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const prevSlide = (e) => {
        e.stopPropagation(); // 阻止事件冒泡
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    const nextSlide = (e) => {
        e.stopPropagation(); // 阻止事件冒泡
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
                            backgroundImage: `url(${slide.image})`,
                            cursor: slide.path ? 'pointer' : 'default' // 根据是否有路径显示不同指针
                        }}
                        onClick={() => handleSlideClick(slide)} // 添加点击事件
                    >
                        <div className="slide-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.subtitle}</p>
                            {/* 添加视觉提示，只对有路径的图片显示 */}
                            {slide.path && (
                                <div className="click-hint">
                                    <span>点击查看详情</span>
                                    <span className="arrow">→</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* 导航箭头 - 添加事件阻止冒泡 */}
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
                        onClick={(e) => {
                            e.stopPropagation(); // 阻止事件冒泡
                            goToSlide(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default RollingDisplay;