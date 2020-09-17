import React from 'react'
import dogvid from './assets/dogEating.mp4'
import HomeJumbotron from '../components/HomeJumbotron'
import BackgroundVid from '../components/BackgroundVid'
import CategoryCard from "../components/CategoryCard";
import websiteData from "../utils/SiteData";
import "./style.css"

export default function Home() {
    
    // Shortened for ease of use
    const dataset = websiteData.petCategories

    return (
        <main className="hide-overflow">
            <BackgroundVid src={dogvid} />
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