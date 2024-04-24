// LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css'; // Make sure to create a LoginPage.css file for styles

const logoUrl = "https://yt3.googleusercontent.com/8YX4eqlHQUS9QTx8W_xVQyR_qPvjtNoLhtkG-vncIbWIl94qu012tHUGUvhpVktOQ3Z19cITdQ=s900-c-k-c0x00ffffff-no-rj";

function Login() {
    let navigate = useNavigate();

    const handleLoginClick = () => {
        console.log('Login button clicked');
        navigate('/building-map'); // Redirect to the BuildingMap component
    };

    return (
        <div className="login-page">
            <h3 className="login-title">Sign in with your University of Melbourne account to access Student Portal</h3>
            <div className="login-container">
                <div className="login-logo">
                    <img src={logoUrl} alt="University of Melbourne Logo" />
                </div>
                <h3 className="login-title">Log in</h3>
                <div className="login-form">
                    <input type="text" placeholder="Username" className="login-input" />
                    <input type="password" placeholder="Password" className="login-input" />
                    <button onClick={handleLoginClick} className="login-button">Log in</button>
                </div>
                <div className="login-footer">
                    {/* Additional links or information */}
                </div>
            </div>
        </div>
    );
};

export default Login;
