import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import zombieLeader from '../assets/zombie-4.gif';
import firebase from '../services/firebase.service';
import moment from 'moment';

const History = () => {
    const authState = useSelector((state: any) => state.auth);
    const [gameList, setGameList] = useState<any>([]);
    const navigate = useNavigate();

    const getList = async () => {
        const list: any = await firebase
            .database()
            .ref('games/' + authState.uuid)
            .get();
        setGameList(Object.values(list.val()).reverse());
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="history-view">
            <div className="view-header p-l-s p-r-s">
                <img className="leader-zombie" src={zombieLeader} />
                <div className="leader-txt">
                    <p className="zombie-title">My Game History</p>
                </div>
                <div className="leader-board p-t-s">
                    {gameList.map((game: any, idx: number) => (
                        <div className="flex justify-space-between" key={idx}>
                            <p className="zombie-text">
                                {moment(game.start).format('MM/DD/YY hh:mm') ||
                                    '-'}
                            </p>
                            <p className="zombie-text">{game.difficulty}</p>
                            <p className="zombie-text">{game.status}</p>
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

export default History;
