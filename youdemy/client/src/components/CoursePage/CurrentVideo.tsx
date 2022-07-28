import { useState } from 'react';
import YouTube from 'react-youtube';

import "../../styles/currentvid.css"

type Props = {
    currentVidUrl: string;
    currentVidIndex: number;
};

const CurrentVideo = ({currentVidUrl, currentVidIndex}: Props) => {
    const [status, setStatus] = useState<number>(0); // red circle

    const onStartVideo = () => {
        if (status !== 2) {
            setStatus(1); // yellow circle
        }
    };

    const onCompleteVideo = () => {
        setStatus(2); // green circle
    };

    return (
        <div className="current-video">
            <div className="large-video">
                <YouTube 
                    videoId="MT5j7xroSu4"
                    onPlay={onStartVideo}
                    onEnd={onCompleteVideo} 
                />
            </div>
            <div className="large-title">Next.js Tutorial #1 - Introduction & Setup</div>
            <div className="large-author">Richard Gomez</div>  
            <div className="large-desc">Description</div>
        </div>
    );
};

export default CurrentVideo;