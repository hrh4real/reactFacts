import React from 'react';
import { FiSettings, FiHelpCircle, FiUser, FiBook, FiHome, FiRadio } from 'react-icons/fi';

export default function FeatherIcon() {
    return (
        <>
            <div className="feather" style={{ textAlign: 'center', padding: '20px' }}>
                <h1>React Icons Example</h1>
                <div className="icon-container">
                    <FiSettings className="icon-settings icons" size={40} color="blue" />
                    <FiHelpCircle className="icon-help icons" size={40} color="green" />
                    <FiUser className="icon-user icons" size={40} color="purple" />
                    <FiBook className="icon-book icons" size={40} color="orange" />
                    <FiHome className="icon-home icons" size={40} color="red" />
                    <FiRadio className="icon-radio icons" size={40} color="#2fffff" />
                </div>
            </div>
        </>
    );
}