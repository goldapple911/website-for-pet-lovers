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

export default function index() {
    return (
        <main>
        <Background src={video}/>
        <div className="row categories">
                <div className="col-md-4 shop-card">
                    <CategoryCard src={dog} alt={"Dog"} category={"Dog"} />
                </div>
                <div className="col-md-4 shop-card">
                    <CategoryCard src={cat} alt={"Cat"} category={"Cat"} />
                </div>
                <div className="col-md-4 shop-card">
                    <CategoryCard src={mammal} alt={"Small Mammal"} category={"Small Mammal"} />
                </div>
                <div className="col-md-4 shop-card">
                    <CategoryCard src={bird} alt={"Birds"} category={"Bird"} />
                </div>
                <div className="col-md-4 shop-card">
                    <CategoryCard src={reptile} alt={"Reptiles"} category={"Reptile"} />
                </div>
                <div className="col-md-4 shop-card">
                    <CategoryCard src={aquatics} alt={"Aquatics"} category={"Aquatic"} />
                </div>
            </div>
        </main>
    )
}
