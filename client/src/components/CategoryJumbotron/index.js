import React from "react";
import "./style.css";
import { v4 as uuidv4 } from 'uuid';

function CategoryJumbotron({ title, description }) {
    console.log(description)
    return (
        <div>
            <div className="category-text-section row">
                <h1 className="display-4 main-txt category-title"><strong>{title}</strong></h1>
                <hr className="my-4" />
                {description.map((desc) => (
                    <p className="lead main-txt p-spacing" key={uuidv4()}>
                        {desc}
                    </p>
                ))}
            </div>
            <div className="row button-row">
                <div className="col-md-6 txt-center">
                    <button className="button">Shop Online</button>
                </div>
                <div className="col-md-6 txt-center">
                    <button className="button">Shop Online</button>
                </div>
            </div>
        </div>
    )
}

export default CategoryJumbotron;