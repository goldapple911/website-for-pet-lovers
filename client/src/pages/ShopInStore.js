import React from 'react';
import video from './assets/dogEating.mp4';
import Background from '../components/Background';
import CategoryCard from '../components/CategoryCard';
import dog from '../components/HomeJumbotron/assets/dog.jpg';
import cat from '../components/HomeJumbotron/assets/cat.jpg';
import mammal from '../components/HomeJumbotron/assets/mammal.jpg';
import bird from '../components/HomeJumbotron/assets/bird.jpg';
import reptile from '../components/HomeJumbotron/assets/reptile.jpg';
import aquatics from '../components/HomeJumbotron/assets/aquatics.jpg';
import websiteData from "../utils/SiteData"

export default function index() {
    // Shortened for ease of use
    const dataset = websiteData.petCategories

    return (
        <main>
            <Background src={video} />
            <div className="row categories">
                {dataset.map((data) => (
                    <div className="col-md-4 shop-card" key={data.id}>
                    <CategoryCard
                        src={data.link}
                        alt={data.category}
                        category={data.category}
                    />
                    </div>
                ))}
            </div>
        </main>
    )
}
