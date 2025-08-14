import React from 'react';
import DetailTemplate from '../DetailTemplate';

function LunXian() {
    // 获取资源URL的辅助函数 - 不使用process.env
    const getAssetUrl = (path, size = 'small') => {
        // 直接使用相对路径，不依赖环境变量
        return `/assets/${size}${path}`;
    };

    const lunxianData = {
        title: "东北沦陷史陈列馆",
        subtitle: "铭记历史，警钟长鸣，弘扬伟大的爱国主义精神",
        bannerImage: getAssetUrl("/banners/changchun/lunxian/lunxian-banner.webp"),
        category: "纪念馆",
        author: "长春市博物馆",
        publishTime: "2025-08-10 10:00:00",
        textContent: `
            <h3>历史背景</h3>
            <p>东北沦陷史陈列馆是为纪念中国东北沦陷这一重要历史事件而建立的专题性陈列馆。1931年九一八事变后，日本帝国主义悍然发动侵华战争，东北三省沦陷，3000万东北同胞陷入了长达14年的殖民统治。这段苦难深重的历史，是中华民族不可忘却的沉痛记忆。</p>
            
            <h3>陈列展示</h3>
            <p>陈列馆通过大量珍贵的历史文物、图片资料和多媒体展示，全面反映了东北沦陷期间日本侵略者的残暴统治，展现了东北人民英勇不屈的抗争精神。展览分为沦陷经过、殖民统治、民族觉醒、抗日斗争、光复东北等几个部分。</p>
            
            <h3>教育功能</h3>
            <p>陈列馆承担着重要的爱国主义教育和历史教育功能，是进行革命传统教育的重要基地。通过参观学习，使人们深刻认识到日本军国主义侵略战争给中华民族带来的深重灾难，激发爱国热情，增强民族自尊心和自信心。</p>
            
            <h3>文物藏品</h3>
            <p>馆内收藏了大量珍贵的历史文物和档案资料，包括日伪统治时期的各种文件、证件、生活用品、武器装备等，以及反映东北人民抗日斗争的珍贵史料。这些文物见证了那段血与火的历史，具有重要的史学价值和教育意义。</p>
            
            <h3>参观信息</h3>
            <ul>
                <li><strong>开放时间：</strong>周二至周日 9:00-16:30（周一闭馆，节假日正常开放）</li>
                <li><strong>详细地址：</strong>吉林省长春市南关区人民大街5268号</li>
                <li><strong>门票价格：</strong>免费参观，需提前预约或现场登记</li>
                <li><strong>交通指南：</strong>乘坐地铁1号线至人民广场站，或乘坐公交62路、306路等可达</li>
                <li><strong>联系电话：</strong>0431-85648966</li>
                <li><strong>参观须知：</strong>请携带有效身份证件，自觉维护参观秩序</li>
            </ul>
            
            <h3>参观意义</h3>
            <p>参观东北沦陷史陈列馆，不仅是一次历史的回顾，更是一次精神的洗礼。让我们铭记历史，珍爱和平，为实现中华民族伟大复兴的中国梦而努力奋斗。勿忘国耻，振兴中华！</p>
        `,
        
        // 文档资料 - 使用实际存在的文件
        documents: [
            {
                title: "抗联精神的必要性研究",
                fileName: "necessaryOfKangLianSpirit.pdf",
                url: getAssetUrl("/documents/changchun/lunxian/necessaryOfKangLianSpirit.pdf"),
                size: 456000, // 预估大小
                description: "深入探讨东北抗联精神的历史价值和现实意义，阐述其在民族复兴中的重要作用。"
            },
            {
                title: "抗联精神的新探讨",
                fileName: "NewDiscussionOfSpirit.pdf",
                url: getAssetUrl("/documents/changchun/lunxian/NewDiscussionOfSpirit.pdf"),
                size: 523000, // 预估大小
                description: "从新的历史视角重新审视东北抗联精神的内涵和外延，为新时代精神传承提供思路。"
            },
            {
                title: "抗联精神的实践价值",
                fileName: "PracticalValueOfSpirit.pdf",
                url: getAssetUrl("/documents/changchun/lunxian/PracticalValueOfSpirit.pdf"),
                size: 389000, // 预估大小
                description: "分析东北抗联精神在当代社会建设中的实践意义，探索其现实应用价值。"
            }
        ],
        
        // 照片资料 - 使用实际存在的照片文件
        photos: [
            {
                title: "历史展览图片一",
                fileName: "lunxianPicture1.png",
                url: getAssetUrl("/thumbnails/changchun/lunxian/lunxianPicture1.png"),
                thumbnailUrl: getAssetUrl("/thumbnails/changchun/lunxian/lunxianPicture1.png"),
                description: "陈列馆内珍贵的历史展品和文物图片，记录着东北沦陷时期的重要历史瞬间。"
            },
            {
                title: "历史展览图片二",
                fileName: "lunxianPicture2.png",
                url: getAssetUrl("/thumbnails/changchun/lunxian/lunxianPicture2.png"),
                thumbnailUrl: getAssetUrl("/thumbnails/changchun/lunxian/lunxianPicture2.png"),
                description: "展现东北抗日斗争历程的珍贵历史图片，体现了中华民族不屈的抗争精神。"
            }
        ],
        
        // 视频资料 - 使用实际存在的视频文件
        videos: [
            {
                title: "东北沦陷史陈列馆介绍",
                thumbnailUrl: getAssetUrl("/thumbnails/changchun/lunxian/lunxianIntro-thumb.jpg"),
                description: "东北沦陷史陈列馆的详细介绍视频，全面展示陈列馆的历史价值和教育意义。",
                versions: [
                    {
                        type: "preview",
                        title: "预览版（在线观看）",
                        fileName: "lunxianIntro-preview.mp4",
                        url: getAssetUrl("/videos/changchun/lunxian/lunxianIntro-preview.mp4"),
                        duration: "03:45",
                        size: 8388608, // 8MB预估
                        quality: "720p",
                        description: "陈列馆介绍预览版，快速了解展馆概况和主要展览内容"
                    },
                    {
                        type: "full",
                        title: "完整版（下载观看）",
                        fileName: "lunxianIntro-full.mp4",
                        url: getAssetUrl("/videos/changchun/lunxian/lunxianIntro-full.mp4", "large"),
                        duration: "12:30",
                        size: 104857600, // 100MB预估
                        quality: "1080p",
                        downloadOnly: true,
                        description: "完整版陈列馆介绍视频，详细讲解历史背景和展览价值"
                    }
                ]
            }
        ]
    };

    return (
        <DetailTemplate
            title={lunxianData.title}
            subtitle={lunxianData.subtitle}
            bannerImage={lunxianData.bannerImage}
            category={lunxianData.category}
            author={lunxianData.author}
            publishTime={lunxianData.publishTime}
            textContent={lunxianData.textContent}
            documents={lunxianData.documents}
            photos={lunxianData.photos}
            videos={lunxianData.videos}
        />
    );
}

export default LunXian;
