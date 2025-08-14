import React from 'react';
import DetailTemplate from '../DetailTemplate';

function WeiMan() {
    // 获取资源URL的辅助函数 - 不使用process.env
    const getAssetUrl = (path, size = 'small') => {
        // 直接使用相对路径，不依赖环境变量
        return `/assets/${size}${path}`;
    };

    const weimanData = {
        title: "伪满皇宫博物院",
        subtitle: "见证历史沧桑，传承红色文化的重要爱国主义教育基地",
        bannerImage: getAssetUrl("/banners/changchun/weiman/weiman-banner.jpg"),
        category: "历史遗址",
        author: "长春市文物局",
        publishTime: "2025-08-08 09:00:00",
        textContent: `
            <h3>历史背景</h3>
            <p>伪满皇宫博物院是由清朝末代皇帝爱新觉罗·溥仪居住的伪满洲国傀儡皇宫改建而成的宫廷遗址型博物馆。它是中国现存的三大宫廷遗址之一，同时也是日本军国主义武力侵占中国东北、推行法西斯殖民统治的历史见证。</p>
            
            <h3>建筑特色</h3>
            <p>皇宫建筑既有中国传统的民族特色，又体现了西洋建筑风格，是东西方建筑艺术融合的典型代表。主要建筑包括勤民楼、辑熙楼、同德殿等，每一座建筑都承载着深厚的历史内涵。</p>
            
            <h3>教育意义</h3>
            <p>作为全国重点文物保护单位和国家一级博物馆，伪满皇宫博物院承担着重要的爱国主义教育功能。它通过丰富的文物展品和史实资料，深刻揭露了日本侵略者的罪恶行径，展现了中华民族不屈不挠的抗争精神。</p>
            
            <h3>文物收藏</h3>
            <p>博物馆收藏了大量珍贵文物，包括溥仪生活用品、宫廷陈设、历史档案等，这些文物真实地反映了伪满洲国时期的历史面貌，具有重要的史料价值和教育意义。</p>
            
            <h3>参观信息</h3>
            <ul>
                <li><strong>开放时间：</strong>夏季 8:30-17:20，冬季 8:30-16:50（周一闭馆，法定节假日正常开放）</li>
                <li><strong>详细地址：</strong>吉林省长春市宽城区光复北路5号</li>
                <li><strong>门票价格：</strong>成人票70元，学生票35元，60岁以上老人凭证免费，残疾人凭证免费</li>
                <li><strong>交通指南：</strong>乘坐80路、264路、225路、230路等公交车可直达博物馆</li>
                <li><strong>联系电话：</strong>0431-82866611</li>
                <li><strong>官方网站：</strong>www.wmhg.com.cn</li>
            </ul>
            
            <h3>温馨提示</h3>
            <p>参观时请保持安静，不要大声喧哗；请勿触摸展品；馆内禁止吸烟；建议参观时间2-3小时。为了更好地了解伪满皇宫的历史，建议参观前阅读相关资料文档。</p>
        `,
        
        // 文档资料 - 只包含小文档文件
        documents: [
            {
                title: "伪满洲国“国都”的选定与规划建设",
                fileName: "constructionOfWeiman.pdf",
                url: getAssetUrl("/documents/changchun/weiman/constructionOfWeiman.pdf"),
                size: 512000, // 500KB
                description: "为建立日本控制下的“独立国家”———“满洲国”，日本关东军根据对外侵略和殖民统治的政治需要，以及日本的经营基础等各种条件，在中国东北地区的几个重要城市中选定长春为“国都”，是为“新京”。"
            },
            {
                title: "伪满洲国规划的新皇宫",
                fileName: "newPalaceInWeiman.pdf",
                url: getAssetUrl("/documents/changchun/weiman/newPalaceInWeiman.pdf"),
                size: 307200, // 300KB
                description: "在长春市新民大街北端，伪满殖民遗址“八大部”建筑中心区，有一座格外引人注目的雄伟气派的宫殿式建筑 ，这就是伪满洲国规划的新皇宫 。"
            },
            {
                title: "长春伪满皇宫的历史价值和结构特征",
                fileName: "ValueOfWeiman.pdf",
                url: getAssetUrl("/documents/changchun/weiman/ValueOfWeiman.pdf"),
                size: 204800, // 200KB
                description: "伪满皇宫是日本吞并中国东北之后，为了掩盖其罪恶目的，扶持傀儡皇帝溥仪，以满洲国皇帝名义，建立的皇帝宫殿群。虽然伪满皇宫没有最终建成，但从留存下来的建筑图纸和资料中，我们仍能管窥这座皇家宫殿的气势和规模。"
            },
            {
                title: "伪满皇宫简介",
                fileName: "weiman.docx",
                url: getAssetUrl("/documents/changchun/weiman/weiman.docx"),
                size: 153600, // 150KB
                description: "伪满皇宫博物院成立于1962年，占地总面积25.05万平方米，是在中国清朝末代皇帝爱新觉罗•溥仪充当“满洲国”傀儡皇帝时居住的宫廷旧址上建立的宫廷遗址型博物馆。"
            }
        ],
        
        // 照片资料
        photos: [
            {
                title: "伪满皇宫建筑内景",
                fileName: "weimanPicture1.png",
                url: getAssetUrl("/thumbnails/changchun/weiman/weimanPicture1.png"),
                thumbnailUrl: getAssetUrl("/thumbnails/changchun/weiman/weimanPicture1.png"),
                description: "伪满皇宫博物院主要建筑的内景展示，体现了东西方建筑艺术融合的特色。"
            },
            {
                title: "伪满皇宫实践小组成员合影",
                fileName: "weimanPicture2.png", 
                url: getAssetUrl("/thumbnails/changchun/weiman/weimanPicture2.png"),
                thumbnailUrl: getAssetUrl("/thumbnails/changchun/weiman/weimanPicture2.png"),
                description: "伪满皇宫实践小组成员合影，记录了参与实践活动的成员们在博物馆前的合影留念。"
            }
        ],
        
        // 视频资料
        videos: [
            {
                title: "伪满皇宫历史介绍",
                thumbnailUrl: getAssetUrl("/thumbnails/changchun/weiman/weimanIntro2-thumb.jpg"),
                description: "深入介绍伪满皇宫的历史背景、建筑特色和教育意义，全面了解这座历史遗址的重要价值。",
                versions: [
                    {
                        type: "preview",
                        title: "预览版（在线观看）",
                        fileName: "weimanIntro2-preview.mp4",
                        url: getAssetUrl("/videos/changchun/weiman/weimanIntro2-preview.mp4"),
                        duration: "04:30",
                        size: 10485760, // 10MB
                        quality: "720p",
                        description: "4分30秒精华预览，快速了解伪满皇宫的核心历史和参观要点"
                    },
                    {
                        type: "full",
                        title: "完整版（下载观看）",
                        fileName: "weimanIntro2-full.mp4",
                        url: getAssetUrl("/videos/changchun/weiman/weimanIntro2-full.mp4", "large"),
                        duration: "28:45",
                        size: 125829120, // 120MB
                        quality: "1080p",
                        downloadOnly: true,
                        description: "完整版详细介绍，深度解析伪满皇宫的历史价值和文化意义，建议下载到本地观看"
                    }
                ]
            },
            {
                title: "实践活动记录",
                thumbnailUrl: getAssetUrl("/thumbnails/changchun/weiman/practicalMake-thumb.jpg"),
                description: "记录了实践小组在伪满皇宫博物院的实地调研和学习活动，展现了同学们深入了解历史的过程。",
                versions: [
                    {
                        type: "preview",
                        title: "预览版（在线观看）",
                        fileName: "practicalMake1-preview.mp4",
                        url: getAssetUrl("/videos/changchun/weiman/practicalMake1-preview.mp4"),
                        duration: "03:45",
                        size: 7340032, // 7MB
                        quality: "720p",
                        description: "3分45秒实践活动精彩片段，展示同学们的学习成果"
                    },
                    {
                        type: "full",
                        title: "完整版（下载观看）",
                        fileName: "practicalMake-full.mp4",
                        url: getAssetUrl("/videos/changchun/weiman/practicalMake-full.mp4", "large"),
                        duration: "22:30",
                        size: 94371840, // 90MB
                        quality: "1080p",
                        downloadOnly: true,
                        description: "完整版实践活动记录，详细展现了整个调研过程和学习心得，建议下载观看"
                    }
                ]
            },
            {
                title: "实践活动记录二",
                thumbnailUrl: getAssetUrl("/thumbnails/changchun/weiman/practicalMake2-thumb.png"),
                description: "续篇记录了实践小组在伪满皇宫博物院的深入研究和讨论活动，进一步展现历史学习的深度。",
                versions: [
                    {
                        type: "preview",
                        title: "预览版（在线观看）",
                        fileName: "practicalMake2-preview.mp4",
                        url: getAssetUrl("/videos/changchun/weiman/practicalMake2-preview.mp4"),
                        duration: "04:15",
                        size: 8388608, // 8MB
                        quality: "720p",
                        description: "4分15秒实践活动续篇精彩片段，展示更深入的历史探讨"
                    },
                    {
                        type: "full",
                        title: "完整版（下载观看）",
                        fileName: "practicalMake2-full.mp4",
                        url: getAssetUrl("/videos/changchun/weiman/practicalMake2-full.mp4", "large"),
                        duration: "25:40",
                        size: 104857600, // 100MB
                        quality: "1080p",
                        downloadOnly: true,
                        description: "完整版实践活动记录续篇，深度记录学习讨论和感悟分享，建议下载观看"
                    }
                ]
            }
        ]
    };

    return (
        <DetailTemplate
            title={weimanData.title}
            subtitle={weimanData.subtitle}
            bannerImage={weimanData.bannerImage}
            category={weimanData.category}
            author={weimanData.author}
            publishTime={weimanData.publishTime}
            textContent={weimanData.textContent}
            documents={weimanData.documents}
            photos={weimanData.photos}
            videos={weimanData.videos}
        />
    );
}

export default WeiMan;