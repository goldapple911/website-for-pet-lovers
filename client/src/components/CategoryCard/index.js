import React from "react";
import "./style.css"

function CategoryCard({ src, alt }) {
    return (
        <div className="card">
            <a href="#">
                <img className="card-img-top" src={src} alt={alt} />
            </a>
        </div>
    )
}


export default CategoryCard;