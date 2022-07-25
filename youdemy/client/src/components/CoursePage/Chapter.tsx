import React from 'react';
import { TbCircleCheck, TbCircle, TbCircleDashed } from "react-icons/tb"
import "../../styles/chapter.css"

// <TbCircleDashed size={50} color="f6bd60" />
// <TbCircle size={50} color="f28482" />

const Chapter = () => {
    return (
        <div className="chapter">
            <div className="left-div">
                <div className="progress-icon"><TbCircleCheck size={50} color="87bba2" /></div>
            </div>
            <div className="right-div">
                <div className="video-name">Next.js Tutorial #1 - Introduction & Setup</div>
                <div className="video-length">8:42</div>
            </div>
        </div>
    );
};

export default Chapter;