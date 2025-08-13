import React, { useState } from 'react';
import './DetailTemplate.css';

function DetailTemplate({ 
    title, 
    subtitle, 
    bannerImage, 
    category,
    publishTime,
    author,
    textContent,
    documents = [],
    photos = [],
    videos = []
}) {
    const [activeTab, setActiveTab] = useState('content');
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [currentVersionType, setCurrentVersionType] = useState('preview'); // 新增：当前版本类型

    // 格式化时间
    const formatTime = (timeString) => {
        const date = new Date(timeString);
        return date.toLocaleString('zh-CN');
    };

    // 格式化文件大小
    const formatFileSize = (bytes) => {
        if (!bytes) return '';
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1048576) return Math.round(bytes / 1024) + ' KB';
        if (bytes < 1073741824) return Math.round(bytes / 1048576) + ' MB';
        return Math.round(bytes / 1073741824) + ' GB';
    };

    // 获取文件图标
    const getFileIcon = (fileName) => {
        const extension = fileName.split('.').pop().toLowerCase();
        switch (extension) {
            case 'pdf': return '📄';
            case 'doc':
            case 'docx': return '📝';
            case 'ppt':
            case 'pptx': return '📊';
            case 'xls':
            case 'xlsx': return '📈';
            case 'zip':
            case 'rar': return '🗜️';
            default: return '📎';
        }
    };

    // 获取当前视频的当前版本
    const getCurrentVersion = (video, versionType = currentVersionType) => {
        if (video.versions && video.versions.length > 0) {
            return video.versions.find(v => v.type === versionType) || video.versions[0];
        }
        return video; // 兼容旧格式
    };

    // 获取当前播放的视频和版本
    const currentVideo = videos[currentVideoIndex];
    const currentVersion = currentVideo ? getCurrentVersion(currentVideo) : null;

    return (
        <div className="detail-template">
            {/* 头部横幅 */}
            <div className="detail-banner">
                <img 
                    src={bannerImage} 
                    alt={title}
                    className="banner-image"
                />
                <div className="banner-overlay">
                    <div className="banner-content">
                        <span className="category-tag">{category}</span>
                        <h1 className="detail-title">{title}</h1>
                        <p className="detail-subtitle">{subtitle}</p>
                        <div className="meta-info">
                            <span className="author">作者：{author}</span>
                            <span className="publish-time">{formatTime(publishTime)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 内容导航标签 */}
            <div className="content-tabs">
                <button 
                    className={`tab-btn ${activeTab === 'content' ? 'active' : ''}`}
                    onClick={() => setActiveTab('content')}
                >
                    📖 内容详情
                </button>
                {documents.length > 0 && (
                    <button 
                        className={`tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
                        onClick={() => setActiveTab('documents')}
                    >
                        📁 文档资料 ({documents.length})
                    </button>
                )}
                {photos.length > 0 && (
                    <button 
                        className={`tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('photos')}
                    >
                        🖼️ 照片资料 ({photos.length})
                    </button>
                )}
                {videos.length > 0 && (
                    <button 
                        className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('videos')}
                    >
                        🎬 视频资料 ({videos.length})
                    </button>
                )}
            </div>

            {/* 主要内容区域 */}
            <div className="detail-content">
                <div className="content-wrapper">
                    {/* 内容详情 */}
                    {activeTab === 'content' && (
                        <div className="content-section">
                            {textContent && (
                                <div 
                                    className="text-content"
                                    dangerouslySetInnerHTML={{ __html: textContent }}
                                />
                            )}
                        </div>
                    )}

                    {/* 文档资料 */}
                    {activeTab === 'documents' && (
                        <div className="documents-section">
                            <h3>文档资料</h3>
                            <div className="documents-grid">
                                {documents.map((doc, index) => (
                                    <div key={index} className="document-card">
                                        <div className="doc-icon">
                                            {getFileIcon(doc.fileName)}
                                        </div>
                                        <div className="doc-info">
                                            <h4 className="doc-title">{doc.title}</h4>
                                            <p className="doc-filename">{doc.fileName}</p>
                                            <p className="doc-size">{formatFileSize(doc.size)}</p>
                                            {doc.description && (
                                                <p className="doc-description">{doc.description}</p>
                                            )}
                                        </div>
                                        <div className="doc-actions">
                                            <a 
                                                href={doc.url} 
                                                className="btn-download"
                                                download={doc.fileName}
                                            >
                                                下载
                                            </a>
                                            <a 
                                                href={doc.url} 
                                                className="btn-preview"
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                预览
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 照片资料 */}
                    {activeTab === 'photos' && (
                        <div className="photos-section">
                            <h3>照片资料</h3>
                            <div className="photos-grid">
                                {photos.map((photo, index) => (
                                    <div 
                                        key={index} 
                                        className="photo-item"
                                        onClick={() => setSelectedPhoto(photo)}
                                    >
                                        <img 
                                            src={photo.thumbnailUrl || photo.url} 
                                            alt={photo.alt || photo.title}
                                            className="photo-thumbnail"
                                        />
                                        <div className="photo-overlay">
                                            <span className="photo-title">{photo.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 视频资料 - 修改后的部分 */}
                    {activeTab === 'videos' && (
                        <div className="videos-section">
                            <h3>视频资料</h3>
                            {/* 主视频播放器 */}
                            {videos.length > 0 && currentVideo && (
                                <div className="main-video">
                                    {/* 版本切换按钮 */}
                                    {currentVideo.versions && currentVideo.versions.length > 1 && (
                                        <div className="version-selector">
                                            {currentVideo.versions.map((version, vIndex) => (
                                                <button
                                                    key={vIndex}
                                                    className={`version-btn ${currentVersionType === version.type ? 'active' : ''}`}
                                                    onClick={() => setCurrentVersionType(version.type)}
                                                >
                                                    {version.type === 'preview' ? '🎬 预览版' : '💾 完整版'}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {/* 视频播放器或下载链接 */}
                                    <div className="video-player-container">
                                        {currentVersion && currentVersion.downloadOnly ? (
                                            <div className="download-only-video">
                                                <div className="download-placeholder">
                                                    <img 
                                                        src={currentVideo.thumbnailUrl} 
                                                        alt={currentVideo.title}
                                                        className="video-thumbnail-large"
                                                    />
                                                    <div className="download-overlay">
                                                        <div className="download-info">
                                                            <h4>{currentVersion.title}</h4>
                                                            <p>文件大小：{formatFileSize(currentVersion.size)}</p>
                                                            <p>视频时长：{currentVersion.duration}</p>
                                                            <p>视频质量：{currentVersion.quality}</p>
                                                            <a 
                                                                href={currentVersion.url}
                                                                className="btn-download-large"
                                                                download={currentVersion.fileName}
                                                            >
                                                                📥 下载观看
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <video 
                                                controls 
                                                poster={currentVideo.thumbnailUrl}
                                                className="video-player"
                                                key={`${currentVideoIndex}-${currentVersionType}`}
                                            >
                                                <source src={currentVersion?.url} type="video/mp4" />
                                                您的浏览器不支持视频播放。
                                            </video>
                                        )}
                                    </div>

                                    {/* 视频信息 */}
                                    <div className="video-info">
                                        <h4>{currentVideo.title}</h4>
                                        {currentVideo.description && (
                                            <p className="video-description">{currentVideo.description}</p>
                                        )}
                                        {currentVersion && (
                                            <div className="version-info">
                                                <h5>{currentVersion.title}</h5>
                                                <p className="version-description">{currentVersion.description}</p>
                                                <div className="video-meta">
                                                    <span>时长: {currentVersion.duration || '未知'}</span>
                                                    <span>大小: {formatFileSize(currentVersion.size)}</span>
                                                    <span>质量: {currentVersion.quality || '标清'}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* 视频列表 */}
                            {videos.length > 1 && (
                                <div className="video-playlist">
                                    <h4>视频列表</h4>
                                    <div className="playlist-items">
                                        {videos.map((video, index) => (
                                            <div 
                                                key={index}
                                                className={`playlist-item ${index === currentVideoIndex ? 'active' : ''}`}
                                                onClick={() => {
                                                    setCurrentVideoIndex(index);
                                                    setCurrentVersionType('preview'); // 切换视频时默认显示预览版
                                                }}
                                            >
                                                <img 
                                                    src={video.thumbnailUrl} 
                                                    alt={video.title}
                                                    className="playlist-thumbnail"
                                                />
                                                <div className="playlist-info">
                                                    <span className="playlist-title">{video.title}</span>
                                                    <div className="playlist-versions">
                                                        {video.versions ? (
                                                            <span className="playlist-versions-count">
                                                                {video.versions.length} 个版本
                                                            </span>
                                                        ) : (
                                                            <span className="playlist-duration">
                                                                {video.duration || '未知时长'}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* 照片查看器模态框 */}
            {selectedPhoto && (
                <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button 
                            className="close-btn"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            ×
                        </button>
                        <img src={selectedPhoto.url} alt={selectedPhoto.alt} />
                        <div className="modal-info">
                            <h4>{selectedPhoto.title}</h4>
                            {selectedPhoto.description && (
                                <p>{selectedPhoto.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* 底部操作区 */}
            <div className="detail-footer">
                <div className="footer-actions">
                    <button className="btn btn-primary">分享</button>
                    <button className="btn btn-secondary">收藏</button>
                    <button className="btn btn-secondary">打印</button>
                </div>
            </div>
        </div>
    );
}

export default DetailTemplate;