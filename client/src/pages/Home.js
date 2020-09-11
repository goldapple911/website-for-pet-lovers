import React, { useContext } from 'react'
import dogvid from './assets/dogEating.mp4'
import HomeJumbotron from '../components/HomeJumbotron'
import Background from '../components/Background'
import CategoryCard from "../components/CategoryCard";
import websiteData from "../utils/SiteData";
import { ClientContext } from "../utils/ClientContext";
import "./pages.css"

export default function Home() {
    const context = useContext(ClientContext)
    // Shortened for ease of use
    const dataset = websiteData.petCategories

    console.log(context.clientState)

    return (
        <main className="hide-overflow">
            <Background src={dogvid} />
            <HomeJumbotron />

            <div className="row">
                {dataset.map((data) => (
                    <div className="col-md-2" key={data.id}>
                    <CategoryCard
                        src={data.link}
                        alt={data.category}
                        // category={data.category}
                    />
                    </div>
                ))}
            </div>
        </main>
    )
}