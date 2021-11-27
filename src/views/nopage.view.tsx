import React from 'react';
import { useNavigate } from 'react-router-dom';
import lostZombie from '../assets/zombie-2.gif';

const NoPage = () => {
    const navigate = useNavigate();

    return (
        <div className="lostpage">
            <div
                className="lostpage-content pointer"
                onClick={() => navigate('/login')}
            >
                <img className="lostpage-zombie" src={lostZombie} />
                <p className="zombie-title">Are you Lost?</p>
            </div>
        </div>
    );
};

export default NoPage;
