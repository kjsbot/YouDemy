import React from 'react';
import Contents from '../components/CoursePage/Contents';
import CurrentVideo from '../components/CoursePage/CurrentVideo';

import "../styles/coursepage.css"

const CoursePage = () => {
    return (
        <div className="course-page">
            <Contents />
            <CurrentVideo />
        </div>
    );
};

export default CoursePage;