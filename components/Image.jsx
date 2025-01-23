import React from "react";
import reactLogo from "./react-logo.png" 

export default function Image() {
    return (
        <div className="img-container" style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#61dafb",
            border: "2px solid #61dafb",
            borderRadius: "2px"
        }}>
            <img src={reactLogo} alt="react-logo"
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