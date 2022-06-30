import React from 'react';
import '../styles/coursecard.css';

import CardMenu from './CardMenu';

const CourseCard = () => {
    return (
        <div className="course-card">
            <div className="Thumbnail">
                Thumbnail
            </div>

            <div className="course-info">
                Titlee
                Author
            </div>
            
            <CardMenu />
        </div>
    );
};

export default CourseCard;