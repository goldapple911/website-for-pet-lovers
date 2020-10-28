import React from "react";
import Link from "react-router-dom"
import "./categoryJumbotron.css";
import { v4 as uuidv4 } from 'uuid';

function CategoryJumbotron({ title, description, shopOnlineURL }) {
    console.log(description)
    return (
        <div>
            <div className="category-text-section row">
                <h1 className="display-4 main-txt category-title"><strong>{title}</strong></h1>
                <div className="category-description">
                {description.map((desc) => (
                    <p className="lead main-txt p-spacing" key={uuidv4()}>
                        {desc}
                    </p>
                ))}
                </div>
            </div>
            <div className="row button-row">
                <div className="col-md-6 txt-center product-btn">
                    <a href="https://www.pointy.com/chains/atlas_pet_supply" target="_blank" className="button">Search Products</a>
                </div>
                <div className="col-md-6 txt-center product-btn">
                    <a href={shopOnlineURL} target="_blank" className="button">Shop Online</a>
                </div>
            </div>
        </div>
    )
}

export default CategoryJumbotron;