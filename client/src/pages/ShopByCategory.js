import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import CardSingle from '../components/CardSingle';
import websiteData from "../utils/SiteData";
import { ClientContext } from "../utils/ClientContext";
import Background from '../components/Background';
import CategoryJumbotron from '../components/CategoryJumbotron';
import "./style.css"
import { v4 as uuidv4 } from 'uuid';

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
    }, [clientState.category])

    if (clientState.category === "Category State Unset") {
        history.push('/')
    }

    return (
        <main className="hide-overflow top">
            <Background />
            <div className="row">
                <div className="col-lg-4 d-none d-lg-block single-card">
                    <CardSingle
                        src={link}
                        alt={category}
                    />
                </div>
                <div className="col-lg-8 col-md-12 single-card p-2">
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
