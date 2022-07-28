import React, { useState } from 'react';
import Contents from '../components/CoursePage/Contents';
import CurrentVideo from '../components/CoursePage/CurrentVideo';

import "../styles/coursepage.css"

type Props = {
    courseData?: any
};

const CoursePage = ({courseData}: Props) => {
    const [currentVidIndex, setcurrentVidIndex] = useState<number>(0);

    return (
        <div className="course-page">
            <Contents allCourseVids={courseData} />
            <CurrentVideo currentVidUrl={""} currentVidIndex={currentVidIndex} />
        </div>
    );
};

export default CoursePage;