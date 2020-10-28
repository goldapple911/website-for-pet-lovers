import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import CardSingle from '../components/CardSingle';
import websiteData from "../utils/SiteData";
import { ClientContext } from "../utils/ClientContext";
import Background from '../components/Background';
import CategoryJumbotron from '../components/CategoryJumbotron';
import "./style.css"

export default function ShopByCategory() {
    let history = useHistory();
    const [link, setLink] = useState(null);
    const [category, setCategory] = useState("Local Category Unset");
    const [title, setTitle] = useState("Local Title Unset");
    const [description, setDescription] = useState(["Local Description Unset"]);
    const { clientState } = useContext(ClientContext);
    const [shopOnlineURL, setShopOnlineURL] = useState("")

    useEffect(() => {
        const dataset = websiteData.petCategories
        for (let i = 0; i < dataset.length; i++) {
            if (dataset[i].category === clientState.category) {
                setLink(dataset[i].link);
                setCategory(dataset[i].category);
                setTitle(dataset[i].categoryTitle);
                setDescription(dataset[i].description);
                setShopOnlineURL(dataset[i].onlineShopURL)
            }
        }
    },[clientState.category])

    if (clientState.category === "Category State Unset") {
        history.push('/')
    }

    return (
        <main className="hide-overflow">
            <Background />
            <div className="row top">
                <div className="col-md-4 single-card">
                    <CardSingle
                        src={link}
                        alt={category}
                    />
                </div>
                <div className="col-md-8 single-card">
                    <CategoryJumbotron
                        title={title}
                        description={description}
                        shopOnlineURL={shopOnlineURL}
                    />
                </div>
            </div>
        </main>
    )
}
