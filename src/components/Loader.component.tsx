import React from 'react';
import zombieLoader from '../assets/zombie-lost.gif';

const Loader = () => {
    return (
        <div className="align-center">
            <img className="zombie-loader" src={zombieLoader} />
            <p className="zombie-text m-t-m">Loading...</p>
        </div>
    );
};

export default Loader;
