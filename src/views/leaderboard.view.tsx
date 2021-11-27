import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import zombieLeader from '../assets/zombie-leader.gif';
import firebase from '../services/firebase.service';

const Leaderboard = () => {
    const [userList, setUserList] = useState<any>([]);
    const navigate = useNavigate();

    const getList = async () => {
        const list: any = await firebase
            .database()
            .ref('users')
            .orderByChild('score')
            .get();
        setUserList(Object.values(list.val()).reverse());
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="leader-view">
            <div className="view-header p-l-s p-r-s">
                <img className="leader-zombie" src={zombieLeader} />
                <div className="leader-txt">
                    <p className="zombie-title">Leaderboard</p>
                    <p className="zombie-text">Game Point Values</p>
                    <div className="flex justify-space-between">
                        <p className="zombie-text">Hard - 3</p>
                        <p className="zombie-text">Medium - 2</p>
                        <p className="zombie-text">Easy - 1</p>
                    </div>
                </div>
                <div className="leader-board">
                    {userList.map((leader: any, idx: number) => (
                        <div
                            className="flex justify-space-between p-t-s p-b-s"
                            key={idx}
                        >
                            <p className="zombie-text">
                                {leader.first_name} {leader.last_name}
                            </p>
                            <p className="zombie-text">{leader.score}</p>
                        </div>
                    ))}
                </div>
                <p
                    className="menu-link pointer m-t-l"
                    onClick={() => navigate('/menu')}
                >
                    Back to Menu
                </p>
            </div>
        </div>
    );
};

export default Leaderboard;
