import React from 'react';
import "./style.css";

export default function index({ brands }) {
    console.log(brands)
    return (
        <div className="row">
                {/* {brands.map((brand) => (
                    <div className="col-md-2 brand-list" key={uuidv4()}>
                            {brand}
                    </div>
                ))} */}
        </div>
    )
}
