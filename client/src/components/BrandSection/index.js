import React from 'react';
import "./style.css";
import { v4 as uuidv4 } from 'uuid';

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
