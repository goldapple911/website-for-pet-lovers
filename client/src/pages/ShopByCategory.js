import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import SingleCard from '../components/SingleCard';
import websiteData from "../utils/SiteData";
import { ClientContext } from "../utils/ClientContext";
import Background from '../components/Background';
import CategoryJumbotron from '../components/CategoryJumbotron';
import BrandSection from '../components/BrandSection'
import "./style.css"

export default function ShopByCategory() {
    let history = useHistory();
    const [link, setLink] = useState(null);
    const [category, setCategory] = useState("Local Category Unset");
    const [title, setTitle] = useState("Local Title Unset");
    const [description, setDescription] = useState(["Local Description Unset"]);
    const [brands, setBrands] = useState([])
    const { clientState } = useContext(ClientContext);

    useEffect(() => {
        const dataset = websiteData.petCategories
        for (let i = 0; i < dataset.length; i++) {
            if (dataset[i].category === clientState.category) {
                setLink(dataset[i].link);
                setCategory(dataset[i].category);
                setTitle(dataset[i].categoryTitle);
                setDescription(dataset[i].description);
                setBrands(dataset[i].brandExamples);
            }
        }
    })

    if (clientState.category === "Category State Unset") {
        history.push('/')
    }

    return (
        <main className="hide-overflow">
            <Background />
            <div className="row top">
                <div className="col-md-4 single-card">
                    <SingleCard
                        src={link}
                        alt={category}
                    />
                </div>
                <div className="col-md-8 single-card">
                    <CategoryJumbotron
                        title={title}
                        description={description}
                    />
                </div>
            </div>
            <div className="bottom">
                <BrandSection 
                    brands={brands}
                />
            </div>
        </main>
    )
}
