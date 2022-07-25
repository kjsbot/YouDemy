import React from 'react';
import "../../styles/currentvid.css"

const CurrentVideo = () => {
    return (
        <div className="current-video">
            <div className="large-video">
                <iframe
                    src={`https://www.youtube.com/embed/MT5j7xroSu4`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div className="large-title">Next.js Tutorial #1 - Introduction & Setup</div>
            <div className="large-author">Author</div>  
            <div className="large-desc">Description</div>
        </div>
    );
};

export default CurrentVideo;