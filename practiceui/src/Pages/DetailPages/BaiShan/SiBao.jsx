import React from 'react';
import DetailTemplate from '../DetailTemplate';

function SiBao() {
    // 获取资源URL的辅助函数 - 不使用process.env
    const getAssetUrl = (path, size = 'small') => {
        // 直接使用相对路径，不依赖环境变量
        return `/assets/${size}${path}`;
    };

    const sibaoData = {
        title: "四保临江战役纪念馆",
        subtitle: "铭记革命历史，弘扬四保临江精神的红色教育基地",
        bannerImage: getAssetUrl("/banners/baishan/sibao/sibao-banner.jpg"),
        category: "革命纪念馆",
        author: "白山市临江市文物保护中心",
        publishTime: "2025-08-08 11:00:00",
        textContent: `
            <h3>历史背景</h3>
            <p>四保临江战役发生在1946年12月至1947年4月间，是中国人民解放军东北民主联军在吉林省临江地区进行的四次保卫战。这一系列战役对巩固东北解放区南满根据地、支援全国解放战争具有重要战略意义。</p>
            
            <h3>战役概况</h3>
            <p>四保临江战役历时133天，东北民主联军在陈云、肖劲光等领导下，与国民党军队进行了四次大规模作战。我军以劣势兵力和装备，采取灵活机动的战术，最终取得了辉煌胜利，共歼敌4万余人。</p>
            
            <h3>战略意义</h3>
            <p>四保临江战役的胜利，不仅保卫了南满根据地，而且粉碎了国民党军队企图占领东北全境的战略企图。这次战役为后来的辽沈战役奠定了重要基础，在中国革命战争史上具有重要地位。</p>
            
            <h3>纪念馆概况</h3>
            <p>四保临江战役纪念馆建于1987年，占地面积5000平方米，展厅面积2000平方米。馆内陈列着大量珍贵的历史文物、图片和资料，生动再现了四保临江战役的壮烈场面和英雄事迹。</p>
            
            <h3>教育功能</h3>
            <p>纪念馆作为国家级爱国主义教育基地，每年接待大量参观者。通过丰富的展览和生动的讲解，向人们展示了中国共产党领导人民军队英勇作战的光辉历史，传承和弘扬革命精神。</p>
            
            <h3>英雄事迹</h3>
            <p>在四保临江战役中，涌现出许多英雄人物和感人事迹。广大指战员和人民群众团结一心，不怕牺牲，前赴后继，谱写了一曲曲壮丽的英雄赞歌，展现了中华民族不屈不挠的斗争精神。</p>
            
            <h3>参观信息</h3>
            <ul>
                <li><strong>开放时间：</strong>夏季 8:30-17:00，冬季 8:30-16:30（周一闭馆，法定节假日正常开放）</li>
                <li><strong>详细地址：</strong>吉林省白山市临江市建国街108号</li>
                <li><strong>门票价格：</strong>免费参观（需携带有效身份证件）</li>
                <li><strong>交通指南：</strong>乘坐临江市内公交2路、6路、8路可直达纪念馆</li>
                <li><strong>联系电话：</strong>0439-5522789</li>
                <li><strong>讲解服务：</strong>提供免费讲解服务，团体参观需提前预约</li>
            </ul>
            
            <h3>温馨提示</h3>
            <p>参观时请保持安静，认真聆听讲解；请勿触摸展品；馆内禁止吸烟和大声喧哗；建议参观时间2小时。参观前建议了解相关历史背景，以便更好地理解展览内容和历史意义。</p>
        `,
        
        // 文档资料 - 使用实际存在的文档文件
        documents: [
            {
                title: "白山实践活动日志",
                fileName: "logOfBaiShan.docx",
                url: getAssetUrl("/documents/baishan/sibao/logOfBaiShan.docx"),
                size: 204800, // 估算200KB
                description: "详细记录了实践小组在白山地区进行四保临江相关实地考察和学习活动的完整日志，包含活动安排、学习心得和收获总结。"
            }
        ],
        
        // 照片资料 - 使用实际存在的缩略图文件
        photos: [
            {
                title: "四保临江实践考察照片1",
                fileName: "101010.jpg",
                url: getAssetUrl("/thumbnails/baishan/sibao/101010.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/101010.jpg"),
                description: "实践小组在四保临江战役相关地点进行实地考察的珍贵照片。"
            },
            {
                title: "四保临江实践考察照片2",
                fileName: "111.jpg", 
                url: getAssetUrl("/thumbnails/baishan/sibao/111.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/111.jpg"),
                description: "记录了同学们认真学习四保临江战役历史的情景。"
            },
            {
                title: "四保临江实践考察照片3",
                fileName: "121212.jpg",
                url: getAssetUrl("/thumbnails/baishan/sibao/121212.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/121212.jpg"),
                description: "展现了革命历史遗迹的庄严氛围和教育意义。"
            },
            {
                title: "四保临江实践考察照片4",
                fileName: "131313.jpg",
                url: getAssetUrl("/thumbnails/baishan/sibao/131313.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/131313.jpg"),
                description: "体现了实践活动中的学习讨论和心得交流。"
            },
            {
                title: "四保临江实践考察照片5",
                fileName: "141414.jpg",
                url: getAssetUrl("/thumbnails/baishan/sibao/141414.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/141414.jpg"),
                description: "记录了同学们对革命精神的深刻感悟和思考。"
            },
            {
                title: "四保临江实践考察照片6",
                fileName: "222.jpg",
                url: getAssetUrl("/thumbnails/baishan/sibao/222.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/222.jpg"),
                description: "展示了纪念馆内的历史文物和展览内容。"
            },
            {
                title: "四保临江实践考察照片7",
                fileName: "333.jpg",
                url: getAssetUrl("/thumbnails/baishan/sibao/333.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/333.jpg"),
                description: "体现了红色教育基地的重要价值和历史意义。"
            },
            {
                title: "四保临江实践考察照片8",
                fileName: "444.jpg",
                url: getAssetUrl("/thumbnails/baishan/sibao/444.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/444.jpg"),
                description: "记录了实践小组成员的合作学习和团队精神。"
            },
            {
                title: "四保临江实践考察照片9",
                fileName: "555.jpg",
                url: getAssetUrl("/thumbnails/baishan/sibao/555.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/555.jpg"),
                description: "展现了同学们认真参观和深入学习的态度。"
            },
            {
                title: "四保临江实践考察照片10",
                fileName: "666.jpg",
                url: getAssetUrl("/thumbnails/baishan/sibao/666.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/666.jpg"),
                description: "体现了革命历史教育对青年学生的深刻影响。"
            },
            {
                title: "四保临江实践考察照片11",
                fileName: "777.jpg",
                url: getAssetUrl("/thumbnails/baishan/sibao/777.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/777.jpg"),
                description: "记录了实践活动中的重要时刻和感人瞬间。"
            },
            {
                title: "四保临江实践考察照片12",
                fileName: "888.jpg",
                url: getAssetUrl("/thumbnails/baishan/sibao/888.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/888.jpg"),
                description: "展示了战役纪念地的历史文化价值。"
            },
            {
                title: "四保临江实践考察照片13",
                fileName: "999.jpg",
                url: getAssetUrl("/thumbnails/baishan/sibao/999.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/sibao/999.jpg"),
                description: "记录了实践活动的圆满完成和丰硕成果。"
            }
        ],
        
        // 视频资料 - 暂无实际视频文件
        videos: []
    };

    return (
        <DetailTemplate
            title={sibaoData.title}
            subtitle={sibaoData.subtitle}
            bannerImage={sibaoData.bannerImage}
            category={sibaoData.category}
            author={sibaoData.author}
            publishTime={sibaoData.publishTime}
            textContent={sibaoData.textContent}
            documents={sibaoData.documents}
            photos={sibaoData.photos}
            videos={sibaoData.videos}
        />
    );
}

export default SiBao;
