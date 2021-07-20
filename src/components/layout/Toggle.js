import React from "react";
import "./Toggle.css";

export default function Toggle({ toggled, onClick }) {
    return (
        <div onClick={onClick} className={`toggle${toggled ? "night" : ""}`}>
            {/* <div className="notch">
                <div className="crater" />
                <div className="crater" />
            </div>
            <div>
                <div className="shape sm" />
                <div className="shape sm" />
                <div className="shape md" />
                <div className="shape lg" />
            </div> */}
            {!toggled? <i className = "moon" class="far fa-moon"></i>: <i className = "sun" class="far fa-sun"></i>}
        </div>
    );
}
