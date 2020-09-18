import React from "react";
import "./backgroundVid.css";

function BackgroundVid({ src }) {
    return (
        <div>
            <div className="video-container">
                <video autoPlay="autoplay" muted loop="loop" className="cover-video">
                    <source src={src} type="video/mp4" />
                </video>
            </div>
            <div className="overlay">
            </div>
        </div>
    )
}

export default BackgroundVid;