import React from "react";
import "./cardSingle.css";

function SingleCard({ src, alt }) {

    return (
        <div className="col-lg-4 d-none d-lg-block single-card position-relative">
            <div className="vertical-center">
                <img className="h-100 w-100"
                    src={src}
                    alt={alt}
                />
                </div>
        </div>
    )
}

export default SingleCard;