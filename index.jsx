// static page about React -- 

import { createRoot } from "react-dom/client";
import React from "react";

const root = createRoot(document.getElementById("root"));

function Image() {
    return (
        <div className="img-container" style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#61dafb",
            border: "2px solid #61dafb",
            borderRadius: "2px"
        }}>
            <img src="react-logo.png" alt="react-logo"
            style={{
                height: "40px",
                width: "40px",
                display: "flex",
                justifyContent: "left",
                // paddingRight: "15px"
                }} />
            <h1 style={{
                margin: "0px",
                marginLeft: "10px",
                color: "#27292c"
            }}>ReactFacts</h1>
        </div>
    )
}

function Header() {
    return (
        <div className="heading"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                border: "2px solid #61dafb",
                marginTop: "10px",
                padding: "auto",
                borderRadius: "6px"
                // textAlign: "center"
        }}>
            <h1 style={{marginLeft: "22px"}}>Fun facts about React : </h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke
                </li>
                <li>
                    Has well over 100K stars on GitHub
                </li>
                <li>
                    Is maintained by Meta
                </li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

root.render(
    <main>
        <Image />
        <Header />
    </main>
)





