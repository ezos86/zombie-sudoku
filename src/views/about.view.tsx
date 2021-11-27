import React from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../assets/profile.jpeg';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="about-view align-center">
            <img className="about-image" src={profile} />
            <p className="zombie-title">About Me</p>
            <p className="zombie-text m-t-m p-l-s p-r-s">
                I have worked in several startups, for the past 12 years. I have
                worked several positions from hands-on to being a director. I am
                looking for a new opportunity to grow with a young company. I
                have a passion for development and enjoy working on projects and
                learning the latest methodologies.
            </p>
            <p
                className="menu-link pointer m-t-l"
                onClick={() => navigate('/menu')}
            >
                Back to Menu
            </p>
        </div>
    );
};

export default About;
