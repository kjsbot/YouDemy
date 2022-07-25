import React from 'react';
import '../styles/homepage.css'

import CourseCard from '../components/CourseCard';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1 className="home-h1">My Learning</h1>
            <hr />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
    );
};

export default HomePage;