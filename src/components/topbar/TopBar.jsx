// TopBar.jsx
import React from 'react';
import './topbar.css';

const logoUrl = "https://yt3.googleusercontent.com/8YX4eqlHQUS9QTx8W_xVQyR_qPvjtNoLhtkG-vncIbWIl94qu012tHUGUvhpVktOQ3Z19cITdQ=s900-c-k-c0x00ffffff-no-rj";

const TopBar = () => {
    return (
        <div className="top-bar">
            <img src={logoUrl} alt="University Logo" className="top-bar-logo" />
            <h1>Library</h1>
            {/* ...rest of your top bar content */}
        </div>
    );
};

export default TopBar;
