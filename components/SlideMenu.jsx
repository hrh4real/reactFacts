import React from 'react';
import { FiSettings, FiHelpCircle, FiUser, FiBook } from 'react-icons/fi';

const SlideMenu = ({ isOpen }) => {
return (
    <div className={`slide-menu ${isOpen ? 'open' : ''}`}>
    <div className="slide-menu-content">
        <ul>
        <li>
            <FiUser className="menu-icon" />
            <span>Profile</span>
        </li>
        <li>
            <FiSettings className="menu-icon" />
            <span>Settings</span>
        </li>
        <li>
            <FiHelpCircle className="menu-icon" />
            <span>Help & Support</span>
        </li>
        <li>
            <FiBook className="menu-icon" />
            <span>Documentation</span>
        </li>
        </ul>
    </div>
    
        
    </div>
);
};

export default SlideMenu;

