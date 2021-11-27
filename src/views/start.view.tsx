import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import zombieStart from '../assets/zombie-start.gif';

const Start = () => {
    const [diff, setDiff] = useState<string>('easy');
    const navigate = useNavigate();

    return (
        <div className="start-view">
            <div className="start-header">
                <div className="start-zombie-img">
                    <img className="start-zombie" src={zombieStart} />
                </div>
                <p className="start-text">
                    Solve the Sudoku before zombies eat you. You will have 20
                    minutes to solve the sudoku. If you quit, you will lose
                    automatically.
                </p>
            </div>
            <div className="start-content">
                <p className="zombie-text align-center">
                    Select Your Zombie Difficulty
                </p>
                <div className="start-diff">
                    <div
                        className="diff-select pointer"
                        onClick={() => setDiff('easy')}
                    >
                        <p
                            className={`start-diff-select ${
                                diff == 'easy' ? 'menu-active' : ''
                            }`}
                        >
                            Easy
                        </p>
                    </div>
                    <div
                        className="diff-select pointer"
                        onClick={() => setDiff('medium')}
                    >
                        <p
                            className={`start-diff-select ${
                                diff == 'medium' ? 'menu-active' : ''
                            }`}
                        >
                            Medium
                        </p>
                    </div>
                    <div
                        className="diff-select pointer"
                        onClick={() => setDiff('hard')}
                    >
                        <p
                            className={`start-diff-select ${
                                diff == 'hard' ? 'menu-active' : ''
                            }`}
                        >
                            Hard
                        </p>
                    </div>
                </div>
                <button
                    className="button-start"
                    onClick={() => navigate('/game')}
                >
                    Start
                </button>
            </div>
        </div>
    );
};

export default Start;
