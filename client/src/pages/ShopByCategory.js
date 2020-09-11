import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import CategoryCard from '../components/CategoryCard';
import websiteData from "../utils/SiteData";
import { ClientContext } from "../utils/ClientContext";
import Background from '../components/Background';
import dogvid from './assets/dogEating.mp4';

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
                console.log(dataset[i].category)
                setCategory(dataset[i].category);
            }
        }
        console.log(category)
    })

    if (clientState.category === "Category State Unset") {
        history.push('/')
    }

    return (
        <div>
            <Background src={dogvid} />
            <div className="col-md-4">

                <CategoryCard
                    src={link}
                    alt={category}
                // category={state.category}
                />
            </div>
        </div>
    )
}
