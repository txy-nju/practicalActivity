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

    return (
        <div className="detail-template">
            {/* 头部横幅 */}
            <div className="detail-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
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
                                            src={photo.thumbnail || photo.url} 
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

                    {/* 视频资料 */}
                    {activeTab === 'videos' && (
                        <div className="videos-section">
                            <h3>视频资料</h3>
                            {/* 主视频播放器 */}
                            {videos.length > 0 && (
                                <div className="main-video">
                                    <video 
                                        controls 
                                        poster={videos[currentVideoIndex].thumbnail}
                                        className="video-player"
                                        key={currentVideoIndex}
                                    >
                                        <source src={videos[currentVideoIndex].url} type="video/mp4" />
                                        您的浏览器不支持视频播放。
                                    </video>
                                    <div className="video-info">
                                        <h4>{videos[currentVideoIndex].title}</h4>
                                        {videos[currentVideoIndex].description && (
                                            <p>{videos[currentVideoIndex].description}</p>
                                        )}
                                        <div className="video-meta">
                                            <span>时长: {videos[currentVideoIndex].duration || '未知'}</span>
                                            <span>大小: {formatFileSize(videos[currentVideoIndex].size)}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* 视频列表 */}
                            {videos.length > 1 && (
                                <div className="video-playlist">
                                    <h4>播放列表</h4>
                                    <div className="playlist-items">
                                        {videos.map((video, index) => (
                                            <div 
                                                key={index}
                                                className={`playlist-item ${index === currentVideoIndex ? 'active' : ''}`}
                                                onClick={() => setCurrentVideoIndex(index)}
                                            >
                                                <img 
                                                    src={video.thumbnail} 
                                                    alt={video.title}
                                                    className="playlist-thumbnail"
                                                />
                                                <div className="playlist-info">
                                                    <span className="playlist-title">{video.title}</span>
                                                    <span className="playlist-duration">{video.duration || '未知时长'}</span>
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