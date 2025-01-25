import React, { useState } from "react";
import reactLogo from "./react-logo.png" 
import Dropdown from "./Dropdown";
import SlideMenu from "./SlideMenu";

export default function Navbar() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isMoreMenuVisible, setIsMoreMenuVisible] = useState(false);
    const handleHover = () => setIsDropdownVisible(true);
    const handleLeave = () => setIsDropdownVisible(false);
    const handleMoreHover = () => setIsMoreMenuVisible(true);
    const handleMoreLeave = () => setIsMoreMenuVisible(false);
    return (
        <>
            <header className="nav-head">
            <nav className="nav-bar">
                <section className="nav-left">
                    <section className="img-section">
                        <a href="/" title="go to page">
                        <img src={reactLogo} alt="react-logo" className="react-img"/>
                        </a>
                    <h1>ReactFacts</h1>
                    </section>
                    <ul className="nav-list">
                        <li className="list"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}>
                            Browse
                            {isDropdownVisible && <Dropdown />}
                        </li>
                        <li className="list">Contact</li>
                        <li className="list"
                            onMouseEnter={handleMoreHover}
                            onMouseLeave={handleMoreLeave}>
                            More
                            <SlideMenu isOpen={isMoreMenuVisible} />
                        </li>
                    </ul>
                </section>
                </nav>
            </header>
        </>
    )
}