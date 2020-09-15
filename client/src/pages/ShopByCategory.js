import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import SingleCard from '../components/SingleCard';
import websiteData from "../utils/SiteData";
import { ClientContext } from "../utils/ClientContext";
import Background from '../components/Background';
import CategoryJumbotron from '../components/CategoryJumbotron';
import "./style.css"

export default function ShopByCategory() {
    let history = useHistory();
    const [link, setLink] = useState(null);
    const [category, setCategory] = useState("Local Category Unset");
    const { clientState } = useContext(ClientContext);

    useEffect(() => {
        const dataset = websiteData.petCategories
        for (let i = 0; i < dataset.length; i++) {
            if (dataset[i].category === clientState.category) {
                setLink(dataset[i].link);
                setCategory(dataset[i].category);
            }
        }
    })

    if (clientState.category === "Category State Unset") {
        history.push('/')
    }

    return (
        <main className="hide-overflow">
            <Background />
            <div className="row">
                <div className="col-md-3 single-card">

                    <SingleCard
                        src={link}
                        alt={category}
                    />
                </div>
                <div className="col-md-9 single-card">
                    <CategoryJumbotron />
                </div>
            </div>
        </main>
    )
}
