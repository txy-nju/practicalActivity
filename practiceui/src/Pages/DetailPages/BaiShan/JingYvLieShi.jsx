import React from 'react';
import DetailTemplate from '../DetailTemplate';

function JingYvLieShi() {
    // 获取资源URL的辅助函数 - 不使用process.env
    const getAssetUrl = (path, size = 'small') => {
        // 直接使用相对路径，不依赖环境变量
        return `/assets/${size}${path}`;
    };

    const jingyvlieshiData = {
        title: "杨靖宇烈士陵园",
        subtitle: "缅怀抗日英雄，传承革命精神的红色教育基地",
        bannerImage: getAssetUrl("/banners/baishan/jingyvlieshi/jingyvlieshi-banner.webp"),
        category: "革命纪念地",
        author: "白山市文物保护管理所",
        publishTime: "2025-08-08 10:30:00",
        textContent: `
            <h3>英雄生平</h3>
            <p>杨靖宇（1905-1940），原名马尚德，字骥生，河南省确山县人，中国共产党优秀党员，无产阶级革命家、军事家、著名抗日民族英雄，鄂豫皖苏区及其红军的创始人之一，东北抗日联军的主要创建者和领导人之一。</p>
            
            <h3>抗日斗争</h3>
            <p>1936年2月，杨靖宇任东北抗日联军第一路军总司令兼政治委员。在极其困难的条件下，他率领东北军民与日寇血战于白山黑水之间，他在冰天雪地、弹尽粮绝的紧急情况下，最后孤身一人与大量日寇周旋战斗几昼夜后壮烈牺牲。</p>
            
            <h3>英雄精神</h3>
            <p>杨靖宇将军表现了中华民族不畏强暴、英勇不屈的精神，他的英雄事迹教育了一代又一代中华儿女。敌人解剖他的遗体后发现，他的胃里没有一粒粮食，只有野草、树皮和棉絮，这种视死如归、坚贞不屈的革命精神令人动容。</p>
            
            <h3>陵园概况</h3>
            <p>杨靖宇烈士陵园坐落在吉林省白山市靖宇县县城西南，占地2万平方米。陵园内建有杨靖宇烈士墓、杨靖宇烈士纪念馆、杨靖宇将军雕像等纪念设施，是全国重点文物保护单位、全国爱国主义教育示范基地。</p>
            
            <h3>纪念意义</h3>
            <p>杨靖宇烈士陵园不仅是缅怀英雄、寄托哀思的地方，更是进行爱国主义教育、革命传统教育的重要基地。它见证了中华民族抗击侵略的光辉历史，激励着后人继承先烈遗志，为实现中华民族伟大复兴而努力奋斗。</p>
            
            <h3>参观信息</h3>
            <ul>
                <li><strong>开放时间：</strong>夏季 8:00-17:30，冬季 8:00-16:30（周一闭馆，法定节假日正常开放）</li>
                <li><strong>详细地址：</strong>吉林省白山市靖宇县靖宇大街888号</li>
                <li><strong>门票价格：</strong>免费参观（需携带有效身份证件）</li>
                <li><strong>交通指南：</strong>乘坐靖宇县内公交1路、3路、5路可直达陵园</li>
                <li><strong>联系电话：</strong>0439-7222456</li>
                <li><strong>预约方式：</strong>团体参观需提前3天电话预约</li>
            </ul>
            
            <h3>温馨提示</h3>
            <p>参观时请保持肃静，表示对烈士的敬意；请勿在纪念设施前喧哗；禁止在陵园内吸烟；建议参观时间1-2小时。参观前建议了解杨靖宇将军的英雄事迹，以更好地感受革命精神的伟大。</p>
        `,
        
        // 文档资料 - 暂无实际文档文件
        documents: [],
        
        // 照片资料 - 使用实际存在的缩略图文件
        photos: [
            {
                title: "杨靖宇烈士陵园实地考察照片1",
                fileName: "1.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/1.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/1.jpg"),
                description: "实践小组在杨靖宇烈士陵园进行实地考察的珍贵照片。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片2",
                fileName: "2.jpg", 
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/2.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/2.jpg"),
                description: "记录了实践小组成员在陵园内学习和参观的情景。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片3",
                fileName: "3.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/3.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/3.jpg"),
                description: "展现了陵园庄严肃穆的环境和深厚的历史文化氛围。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片4",
                fileName: "4.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/4.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/4.jpg"),
                description: "记录了实践活动中的重要瞬间和学习收获。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片5",
                fileName: "5.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/5.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/5.jpg"),
                description: "体现了同学们对革命先烈的崇敬之情。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片6",
                fileName: "6.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/6.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/6.jpg"),
                description: "展示了陵园内的纪念设施和历史文物。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片7",
                fileName: "7.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/7.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/7.jpg"),
                description: "记录了实践小组的学习讨论和心得交流。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片8",
                fileName: "8.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/8.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/8.jpg"),
                description: "体现了红色教育基地的教育价值和历史意义。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片9",
                fileName: "9.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/9.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/9.jpg"),
                description: "展现了同学们认真学习革命历史的态度。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片10",
                fileName: "10.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/10.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/10.jpg"),
                description: "记录了实践活动的重要时刻和深刻感受。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片11",
                fileName: "11.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/11.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/11.jpg"),
                description: "展示了陵园的建筑风格和纪念意义。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片12",
                fileName: "12.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/12.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/12.jpg"),
                description: "体现了爱国主义教育的深刻内涵。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片13",
                fileName: "13.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/13.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/13.jpg"),
                description: "记录了同学们的学习成果和心得体会。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片14",
                fileName: "14.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/14.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/14.jpg"),
                description: "展现了革命纪念地的庄严氛围。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片15",
                fileName: "15.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/15.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/15.jpg"),
                description: "记录了实践活动中的精彩瞬间。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片16",
                fileName: "16.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/16.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/16.jpg"),
                description: "体现了同学们对历史的深入思考。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片17",
                fileName: "17.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/17.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/17.jpg"),
                description: "展示了实践学习的丰富内容。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片18",
                fileName: "18.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/18.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/18.jpg"),
                description: "记录了红色教育的深刻意义。"
            },
            {
                title: "杨靖宇烈士陵园实地考察照片19",
                fileName: "19.jpg",
                url: getAssetUrl("/thumbnails/baishan/jingyvlieshi/19.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/baishan/jingyvlieshi/19.jpg"),
                description: "展现了实践活动的圆满成功和教育效果。"
            }
        ],
        
        // 视频资料 - 暂无实际视频文件
        videos: []
    };

    return (
        <DetailTemplate
            title={jingyvlieshiData.title}
            subtitle={jingyvlieshiData.subtitle}
            bannerImage={jingyvlieshiData.bannerImage}
            category={jingyvlieshiData.category}
            author={jingyvlieshiData.author}
            publishTime={jingyvlieshiData.publishTime}
            textContent={jingyvlieshiData.textContent}
            documents={jingyvlieshiData.documents}
            photos={jingyvlieshiData.photos}
            videos={jingyvlieshiData.videos}
        />
    );
}

export default JingYvLieShi;
