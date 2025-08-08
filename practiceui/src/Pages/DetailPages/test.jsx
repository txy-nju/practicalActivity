import React from 'react';
import DetailTemplate from './DetailTemplate';

function TestDetailTemplate() {
    // 模拟测试数据
    const testData = {
        title: "测试项目展示页面",
        subtitle: "这是一个包含文档、图片、视频的完整示例",
        bannerImage: "https://picsum.photos/1200/400?random=1",
        category: "测试分类",
        author: "测试作者",
        publishTime: "2025-08-08 10:00:00",
        textContent: `
            <h3>项目概述</h3>
            <p>这是一个测试项目的详细介绍。项目旨在展示DetailTemplate组件的各种功能。</p>
            <h3>主要特点</h3>
            <ul>
                <li>支持多种媒体类型</li>
                <li>响应式设计</li>
                <li>用户友好的界面</li>
                <li>丰富的交互功能</li>
            </ul>
            <p>更多内容将在各个标签页中展示。</p>
        `,
        documents: [
            {
                title: "项目计划书",
                fileName: "project-plan.pdf",
                url: "#",
                size: 2048000,
                description: "详细的项目实施计划和时间安排"
            },
            {
                title: "技术文档",
                fileName: "tech-doc.docx",
                url: "#",
                size: 1024000,
                description: "项目的技术实现文档"
            }
        ],
        photos: [
            {
                title: "项目启动会议",
                url: "https://picsum.photos/400/300?random=2",
                thumbnail: "https://picsum.photos/250/188?random=2",
                alt: "启动会议现场",
                description: "项目启动会议现场照片"
            },
            {
                title: "团队合影",
                url: "https://picsum.photos/400/300?random=3",
                thumbnail: "https://picsum.photos/250/188?random=3",
                alt: "团队合影",
                description: "项目团队全体成员合影"
            }
        ],
        videos: [
            {
                title: "项目介绍视频",
                url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
                thumbnail: "https://picsum.photos/400/225?random=6",
                duration: "02:30",
                size: 5000000,
                description: "项目的全面介绍视频"
            }
        ]
    };

    return (
        <DetailTemplate
            title={testData.title}
            subtitle={testData.subtitle}
            bannerImage={testData.bannerImage}
            category={testData.category}
            author={testData.author}
            publishTime={testData.publishTime}
            textContent={testData.textContent}
            documents={testData.documents}
            photos={testData.photos}
            videos={testData.videos}
        />
    );
}

export default TestDetailTemplate;