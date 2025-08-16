import React from 'react';
import DetailTemplate from '../DetailTemplate';

function JingYvLingYuan() {
    // 获取资源URL的辅助函数 - 不使用process.env
    const getAssetUrl = (path, size = 'small') => {
        // 直接使用相对路径，不依赖环境变量
        return `/assets/${size}${path}`;
    };

    const jingyvlingyuanData = {
        title: "杨靖宇烈士陵园",
        subtitle: "缅怀抗日英雄，传承民族精神的神圣纪念地",
        bannerImage: getAssetUrl("/banners/tonghua/jingyvlinyuan/jingyvlingyuan-banner.webp"),
        category: "烈士陵园",
        author: "通化市文物管理处",
        publishTime: "2025-07-31 13:00:00",
        textContent: `
            <h3>英雄生平</h3>
            <p>杨靖宇（1905-1940），原名马尚德，字骥生，河南确山人。中国共产党优秀党员，无产阶级革命家、军事家、著名抗日民族英雄。1929年春赴东北，历任中共抚顺特别支部书记、中共哈尔滨市委书记、东北抗日联军第一军军长兼政治委员、东北抗日联军第一路军总指挥兼政治委员等职。</p>
            
            <h3>英勇抗战</h3>
            <p>杨靖宇率领东北抗联在白山黑水间与日寇血战14年，给敌人以沉重打击。1940年2月23日，在吉林蒙江县保安村（今靖宇县靖宇村）三道崴子壮烈殉国，年仅35岁。敌人解剖其遗体后发现，他的胃中只有野菜、草根和棉絮，没有一粒粮食。</p>
            
            <h3>陵园概况</h3>
            <p>杨靖宇烈士陵园坐落在吉林省通化市东昌区靖宇路，占地2万平方米。陵园由纪念塔、纪念馆、烈士墓、纪念碑等组成，是全国重点文物保护单位、全国爱国主义教育示范基地、国家级烈士纪念设施保护单位。</p>
            
            <h3>纪念设施</h3>
            <p>陵园主要建筑包括杨靖宇烈士纪念塔、杨靖宇烈士陵墓、杨靖宇将军纪念馆等。纪念塔高13.6米，塔身镌刻着朱德题写的"民族英雄杨靖宇将军之墓"。纪念馆内陈列着杨靖宇将军的生平事迹和珍贵文物。</p>
            
            <h3>教育意义</h3>
            <p>陵园承担着重要的爱国主义教育功能，每年接待大量参观者，特别是青少年学生。通过瞻仰烈士陵墓、参观纪念馆、聆听英雄事迹，人们深受教育和鼓舞，进一步激发了爱国热情和民族自豪感。</p>
            
            <h3>纪念活动</h3>
            <p>每年在清明节、烈士纪念日等重要节日，陵园都会举办隆重的纪念活动。各界人士前来敬献花篮、缅怀先烈，表达对英雄的崇敬之情。这些活动对于传承红色基因、弘扬民族精神具有重要意义。</p>
            
            <h3>参观信息</h3>
            <ul>
                <li><strong>开放时间：</strong>夏季 8:00-17:30，冬季 8:30-16:30（周一闭园维护）</li>
                <li><strong>详细地址：</strong>吉林省通化市东昌区靖宇路888号</li>
                <li><strong>门票价格：</strong>免费开放，凭有效身份证件参观</li>
                <li><strong>交通指南：</strong>乘坐1路、15路、22路公交车至烈士陵园站</li>
                <li><strong>联系电话：</strong>0435-3224815</li>
                <li><strong>预约电话：</strong>0435-3224816</li>
                <li><strong>参观须知：</strong>请保持肃静，不得在园内大声喧哗，不得损坏纪念设施</li>
            </ul>
            
            <h3>精神传承</h3>
            <p>杨靖宇精神是以爱国主义为核心的伟大民族精神的集中体现，是中华民族宝贵的精神财富。让我们继承和发扬杨靖宇精神，不忘初心、牢记使命，为实现中华民族伟大复兴的中国梦而努力奋斗！</p>
        `,
        
        // 文档资料 - 使用实际存在的文件
        documents: [
            {
                title: "杨靖宇烈士陵园介绍",
                fileName: "IntroductionOfJingYvLingYuan.docx",
                url: getAssetUrl("/documents/tonghua/jingyvlinyuan/IntroductionOfJingYvLingYuan.docx"),
                size: 345600, // 预估大小
                description: "详细介绍杨靖宇烈士陵园的历史背景、建设历程、主要纪念设施和教育意义，是了解陵园全貌的重要资料。"
            }
        ],
        
        // 照片资料 - 使用实际存在的照片文件（选取部分有代表性的）
        photos: [
            {
                title: "烈士陵园全景",
                fileName: "IMG_20250731_124548.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_124548.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_124548.jpg"),
                description: "杨靖宇烈士陵园庄严肃穆的全景图，展现了陵园的整体布局和纪念设施。"
            },
            {
                title: "纪念塔近景",
                fileName: "IMG_20250731_124707.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_124707.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_124707.jpg"),
                description: "杨靖宇烈士纪念塔的特写，塔身刻有朱德题写的碑文，庄重威严。"
            },
            {
                title: "纪念馆外观",
                fileName: "IMG_20250731_124728.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_124728.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_124728.jpg"),
                description: "杨靖宇将军纪念馆的建筑外观，现代化的设计与历史的厚重感完美融合。"
            },
            {
                title: "英雄雕像",
                fileName: "IMG_20250731_124957.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_124957.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_124957.jpg"),
                description: "杨靖宇将军的英雄雕像，生动再现了这位民族英雄的光辉形象。"
            },
            {
                title: "纪念碑铭文",
                fileName: "IMG_20250731_125414.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_125414.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_125414.jpg"),
                description: "纪念碑上镌刻的铭文，记录着杨靖宇将军的英勇事迹和不朽功绩。"
            },
            {
                title: "烈士墓地",
                fileName: "IMG_20250731_125519.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_125519.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_125519.jpg"),
                description: "杨靖宇烈士长眠的墓地，青松环绕，庄严神圣。"
            },
            {
                title: "纪念馆内景",
                fileName: "IMG_20250731_125823.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_125823.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_125823.jpg"),
                description: "纪念馆内部展示，通过丰富的文物和图片资料展现英雄的光辉一生。"
            },
            {
                title: "历史文物展览",
                fileName: "IMG_20250731_125906.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_125906.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_125906.jpg"),
                description: "馆内珍贵的历史文物展览，真实记录了抗日战争的艰苦岁月。"
            },
            {
                title: "抗联历史展示",
                fileName: "IMG_20250731_130404.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_130404.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_130404.jpg"),
                description: "东北抗联历史展示区，详细介绍了抗联的发展历程和英勇斗争。"
            },
            {
                title: "缅怀活动现场",
                fileName: "IMG_20250731_130713.jpg",
                url: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_130713.jpg"),
                thumbnailUrl: getAssetUrl("/thumbnails/tonghua/jingyvlinyuan/IMG_20250731_130713.jpg"),
                description: "参观者在陵园进行缅怀活动，表达对英雄的崇敬之情。"
            }
        ],
        
        // 视频资料 - 预留接口，可根据实际文件添加
        videos: []
    };

    return (
        <DetailTemplate
            title={jingyvlingyuanData.title}
            subtitle={jingyvlingyuanData.subtitle}
            bannerImage={jingyvlingyuanData.bannerImage}
            category={jingyvlingyuanData.category}
            author={jingyvlingyuanData.author}
            publishTime={jingyvlingyuanData.publishTime}
            textContent={jingyvlingyuanData.textContent}
            documents={jingyvlingyuanData.documents}
            photos={jingyvlingyuanData.photos}
            videos={jingyvlingyuanData.videos}
        />
    );
}

export default JingYvLingYuan;
