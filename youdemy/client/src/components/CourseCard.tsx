import React from 'react';
import '../styles/coursecard.css';

import CardMenu from './CardMenu';

const CourseCard = () => {
    return (
        <div className="course-card">
            <div className="thumbnail">
                Thumbnail
            </div>

            <div className="course-info">
                <div className="home-title">Creating a 3D Game - For Beginners!</div>
                <div className="home-author">Brackeys</div>
                <div className="home-status">In Progress</div>
            </div>
            
            <div className="home-coursemenu">
                <CardMenu />
            </div>

        </div>
    );
};

export default CourseCard;