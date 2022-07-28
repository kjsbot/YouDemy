import React from 'react';
import Chapter from './Chapter';
import "../../styles/contents.css"

type Props = {
    allCourseVids: any
};

const Contents = ({allCourseVids}: Props) => {
    return (
        <div className="contents">
            <div className="course-title">Next.js Crash Course</div>
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
            <Chapter />
        </div>
    );
};

export default Contents;