import React from 'react';
import DetailTemplate from '../DetailTemplate';

function JingYvGanBu() {
    // 获取资源URL的辅助函数 - 不使用process.env
    const getAssetUrl = (path, size = 'small') => {
        // 直接使用相对路径，不依赖环境变量
        return `/assets/${size}${path}`;
    };

    const jingyvganbuData = {
        title: "靖宇干部学院",
        subtitle: "传承杨靖宇精神，锻造时代先锋的红色教育圣地",
        bannerImage: getAssetUrl("/banners/tonghua/jingyvganbu/jingyvganbu-banner.webp"),
        category: "教育基地",
        author: "通化市委组织部",
        publishTime: "2025-08-12 14:00:00",
        textContent: `
            <h3>学院概况</h3>
            <p>靖宇干部学院是以抗日民族英雄杨靖宇将军命名的党性教育基地，坐落在吉林省通化市。学院充分利用通化地区丰富的红色教育资源，以杨靖宇精神为核心，致力于培养新时代的优秀干部和党员。</p>
            
            <h3>杨靖宇精神内涵</h3>
            <p>杨靖宇精神是以爱国主义为核心的伟大民族精神的集中体现，包含着坚定的理想信念、顽强的革命意志、无私的奉献精神和严明的组织纪律。这种精神是中华民族宝贵的精神财富，是激励我们不断前进的强大动力。</p>
            
            <h3>教育特色</h3>
            <p>学院坚持理论教育与实践教学相结合，课堂教学与现场教学相结合，传统教育与现代手段相结合。通过专题教学、现场教学、体验教学、激情教学等多种形式，让学员在学思践悟中传承红色基因，在知行合一中坚定理想信念。</p>
            
            <h3>课程设置</h3>
            <p>学院围绕党性教育主线，设置了"杨靖宇精神与共产党人的初心使命"、"抗联精神与理想信念教育"、"红色文化与干部素养提升"等核心课程，形成了具有鲜明地域特色和时代特征的课程体系。</p>
            
            <h3>实践基地</h3>
            <p>学院建立了杨靖宇烈士陵园、集安抗美援朝纪念馆、通化师范学院红色文化育人基地等多个现场教学点，为学员提供沉浸式的红色教育体验，让历史的声音在现实中回响。</p>
            
            <h3>办学成果</h3>
            <p>自成立以来，学院已培训各级党员干部数万人次，在传承红色基因、弘扬杨靖宇精神方面发挥了重要作用，被誉为东北地区重要的党性教育基地和精神高地。</p>
            
            <h3>联系方式</h3>
            <ul>
                <li><strong>详细地址：</strong>吉林省通化市东昌区龙泉路1588号</li>
                <li><strong>培训咨询：</strong>0435-3650128</li>
                <li><strong>报名热线：</strong>0435-3650168</li>
                <li><strong>传真电话：</strong>0435-3650198</li>
                <li><strong>邮政编码：</strong>134001</li>
                <li><strong>官方网站：</strong>www.jygbxy.cn</li>
                <li><strong>电子邮箱：</strong>jygbxy@163.com</li>
            </ul>
            
            <h3>培训理念</h3>
            <p>学院秉承"传承红色基因，锻造时代先锋"的办学理念，致力于培养政治过硬、本领高强的新时代干部队伍。让我们在杨靖宇精神的感召下，不忘初心、牢记使命，为实现中华民族伟大复兴的中国梦贡献力量！</p>
        `,
        
        // 文档资料 - 使用实际存在的文件
        documents: [
            {
                title: "弘扬杨靖宇精神的时代价值",
                fileName: "CarryForwardJingYvSpirit.pdf",
                url: getAssetUrl("/documents/tonghua/jingyvganbu/CarryForwardJingYvSpirit.pdf"),
                size: 512000, // 预估大小
                description: "深入阐释杨靖宇精神的深刻内涵和时代价值，探讨如何在新时代传承和弘扬这一宝贵的精神财富。"
            },
            {
                title: "杨靖宇精神的传承与发展",
                fileName: "ExtendJingYvSpirit.pdf",
                url: getAssetUrl("/documents/tonghua/jingyvganbu/ExtendJingYvSpirit.pdf"),
                size: 467000, // 预估大小
                description: "分析杨靖宇精神在不同历史时期的传承发展历程，为新时代精神文明建设提供理论指导。"
            },
            {
                title: "通化革命遗址介绍",
                fileName: "IntroductionOfTongHuaRevolutionSite.docx",
                url: getAssetUrl("/documents/tonghua/jingyvganbu/IntroductionOfTongHuaRevolutionSite.docx"),
                size: 234000, // 预估大小
                description: "全面介绍通化地区的革命历史遗址和红色文化资源，为开展党性教育提供丰富的教学素材。"
            },
            {
                title: "杨靖宇精神的价值意蕴",
                fileName: "TheValueOfJingYvSpirit.pdf",
                url: getAssetUrl("/documents/tonghua/jingyvganbu/TheValueOfJingYvSpirit.pdf"),
                size: 389000, // 预估大小
                description: "从哲学和文化的角度深入解析杨靖宇精神的价值意蕴，揭示其对当代社会的重要启示意义。"
            }
        ],
        
        // 照片资料 - 使用实际存在的照片文件
        photos: [
            {
                title: "学院教学楼外景",
                fileName: "picture1.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvganbu/picture1.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvganbu/picture1.jpg"),
                description: "靖宇干部学院现代化教学楼外景，体现了学院的办学实力和教育环境。"
            },
            {
                title: "杨靖宇纪念展厅",
                fileName: "picture2.png",
                url: getAssetUrl("/thumbnails/tonghua/jingyvganbu/picture2.png"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvganbu/picture2.png"),
                description: "学院内杨靖宇纪念展厅，通过丰富的文物和图片资料展现英雄的光辉事迹。"
            },
            {
                title: "党性教育课堂",
                fileName: "picture3.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvganbu/picture3.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvganbu/picture3.jpg"),
                description: "学院党性教育课堂教学现场，学员们认真学习杨靖宇精神的深刻内涵。"
            },
            {
                title: "现场教学活动",
                fileName: "picture4.png",
                url: getAssetUrl("/thumbnails/tonghua/jingyvganbu/picture4.png"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvganbu/picture4.png"),
                description: "学员在杨靖宇烈士陵园进行现场教学，接受革命传统教育的洗礼。"
            },
            {
                title: "学员实践活动",
                fileName: "picture5.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvganbu/picture5.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvganbu/picture5.jpg"),
                description: "学员们参与红色文化实践活动，在体验中感受杨靖宇精神的时代价值。"
            }
        ],
        
        // 视频资料 - 预留接口，可根据实际文件添加
        videos: []
    };

    return (
        <DetailTemplate
            title={jingyvganbuData.title}
            subtitle={jingyvganbuData.subtitle}
            bannerImage={jingyvganbuData.bannerImage}
            category={jingyvganbuData.category}
            author={jingyvganbuData.author}
            publishTime={jingyvganbuData.publishTime}
            textContent={jingyvganbuData.textContent}
            documents={jingyvganbuData.documents}
            photos={jingyvganbuData.photos}
            videos={jingyvganbuData.videos}
        />
    );
}

export default JingYvGanBu;