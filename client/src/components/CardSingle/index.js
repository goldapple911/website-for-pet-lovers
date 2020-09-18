import React from "react";
import "./style.css";

function SingleCard({ src, alt }) {

    return (
        <div className="single-card">
                <img className="card-img-top single-card"
                    src={src}
                    alt={alt}
                />
        </div>
    )
}

export default SingleCard;