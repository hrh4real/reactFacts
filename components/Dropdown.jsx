import React from "react";

export default function Dropdown() {
    return (
        <ul className="dropdown-menu">
            <li className="dropdown-list"><a href="#">Requests</a></li>
            <li className="dropdown-list"><a href="#">Format</a></li>
            <li className="dropdown-list"><a href="#">Options</a></li>
        </ul>
    );
}