import React, { useState } from 'react';
import './volumn.css';

function Volumn() {
    const [activeTab, setActiveTab] = useState(0);
    
    // 新闻数据
    const newsData = [
        {
            category: '全国要闻',
            news: [
                {
                    id: 1,
                    title: '"携手开创这个星球更加美好的未来"',
                    date: '08/08'
                },
                {
                    id: 2,
                    title: '2025年第12届世界运动会在成都开幕',
                    date: '08/08'
                },
                {
                    id: 3,
                    title: '国务院办公厅印发《自然灾害调查评估办法》',
                    date: '08/08'
                },
                {
                    id: 4,
                    title: '我国首次完成载人月球探测任务搭月计划',
                    date: '08/08'
                },
                {
                    id: 5,
                    title: '减税降费！让企业享受实实在在政策红利',
                    date: '08/08'
                },
                {
                    id: 6,
                    title: '减负增效促实干 轻装备进新征程——',
                    date: '08/08'
                }
            ]
        },
        {
            category: '山西要闻',
            news: [
                {
                    id: 1,
                    title: '山西省召开重要会议部署下半年工作',
                    date: '08/08'
                },
                {
                    id: 2,
                    title: '太原市启动新一轮城市更新计划',
                    date: '08/08'
                },
                {
                    id: 3,
                    title: '山西能源产业转型升级取得新进展',
                    date: '08/08'
                },
                {
                    id: 4,
                    title: '全省教育系统改革创新工作推进会召开',
                    date: '08/07'
                },
                {
                    id: 5,
                    title: '山西文旅产业发展势头强劲',
                    date: '08/07'
                }
            ]
        },
        {
            category: '政务活动',
            news: [
                {
                    id: 1,
                    title: '市政府召开常务会议研究重点项目建设',
                    date: '08/08'
                },
                {
                    id: 2,
                    title: '区委书记调研重点民生工程进展情况',
                    date: '08/08'
                },
                {
                    id: 3,
                    title: '政务服务"一网通办"平台正式上线',
                    date: '08/07'
                },
                {
                    id: 4,
                    title: '优化营商环境专项行动取得显著成效',
                    date: '08/07'
                }
            ]
        }
    ];
    
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    
    return (
        <div className="volumn">
            {/* 标签导航 */}
            <div className="tab-navigation">
                {newsData.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-button ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.category}
                    </button>
                ))}
            </div>
            
            {/* 新闻列表 */}
        <div className="news-content">
            <ul className="news-list">
                {newsData[activeTab].news.map((item) => (
                    <li key={item.id} className="news-item">
                        <div className="news-main">
                            <span className="news-dot"></span>
                            <a href="#" className="news-title">
                                {item.title}
                            </a>
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