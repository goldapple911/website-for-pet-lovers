import React from "react";
import "./categoryJumbotron.css";
import { v4 as uuidv4 } from 'uuid';

function CategoryJumbotron({ title, description, shopOnlineURL }) {
    console.log(description)
    return (
        <div className="col-lg-8 col-md-12 single-card p-2 position-relative">
            <div className="vertical-center">
                <div className="category-text-section">
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
                        <a href="https://www.pointy.com/chains/atlas_pet_supply" target="_blank" rel="noopener noreferrer"><button className="button">Search Products</button></a>
                    </div>
                    <div className="col-md-6 txt-center product-btn">
                        <a href={shopOnlineURL} target="_blank" rel="noopener noreferrer"><button className="button">Shop Online</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryJumbotron;