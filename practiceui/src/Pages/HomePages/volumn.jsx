import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './volumn.css';

function Volumn() {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();
    
    // 红色文化资源数据
    const cultureData = [
        {
            category: '长春红色文化资源',
            resources: [
                {
                    id: 1,
                    title: '伪满皇宫博物院',
                    description: '见证历史沧桑的重要爱国主义教育基地，展现中华民族不屈不挠的抗争精神',
                    achievements: '收藏珍贵文物万余件，年接待游客超100万人次，被评为国家一级博物馆',
                    path: '/detail/changchun/weiman',
                    date: '08/08'
                },
                {
                    id: 2,
                    title: '东北沦陷史陈列馆',
                    description: '铭记历史、警钟长鸣，弘扬伟大的爱国主义精神的重要纪念场所',
                    achievements: '通过大量史料文物深刻揭露日本侵略罪行，开展爱国主义教育活动',
                    path: '/detail/changchun/lunxian',
                    date: '08/10'
                }
            ]
        },
        {
            category: '通化红色文化资源',
            resources: [
                {
                    id: 1,
                    title: '靖宇干部学院',
                    description: '传承杨靖宇精神，锻造时代先锋的红色教育圣地和党性教育基地',
                    achievements: '培训各级党员干部数万人次，成为东北地区重要的党性教育基地',
                    path: '/detail/tonghua/jingyvganbu',
                    date: '08/12'
                },
                {
                    id: 2,
                    title: '靖宇陵园',
                    description: '纪念抗日民族英雄杨靖宇将军，缅怀革命先烈的重要纪念场所',
                    achievements: '每年举办多场纪念活动，成为爱国主义教育和革命传统教育的重要基地',
                    path: null, // 暂时没有对应组件
                    date: '08/12'
                }
            ]
        }
    ];
    
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    
    const handleResourceClick = (resource) => {
        if (resource.path) {
            navigate(resource.path);
        }
    };
    
    return (
        <div className="volumn">
            {/* 标签导航 */}
            <div className="tab-navigation">
                {cultureData.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.category}
                    </button>
                ))}
            </div>
            
            {/* 红色文化资源列表 */}
            <div className="news-content">
                <ul className="news-list">
                    {cultureData[activeTab].resources.map((item) => (
                        <li 
                            key={item.id} 
                            className={`news-item ${item.path ? 'clickable' : ''}`}
                            onClick={() => handleResourceClick(item)}
                            style={{ 
                                cursor: item.path ? 'pointer' : 'default',
                                opacity: item.path ? 1 : 0.7
                            }}
                        >
                            <div className="news-main">
                                <span className="news-dot"></span>
                                <div className="resource-content">
                                    <div className="resource-title">
                                        {item.title}
                                        {item.path && <span className="link-indicator">→</span>}
                                    </div>
                                    <div className="resource-description">
                                        {item.description}
                                    </div>
                                    <div className="resource-achievements">
                                        <strong>主要成果：</strong>{item.achievements}
                                    </div>
                                </div>
                            </div>
                            <span className="news-date">{item.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Volumn;