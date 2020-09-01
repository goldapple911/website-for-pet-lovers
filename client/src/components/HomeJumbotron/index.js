import React from "react";
import "./style.css";
import CategoryCard from "../CategoryCard";
import dog from "./assets/dog.jpg";
import cat from "./assets/cat.jpg";
import mammal from "./assets/mammal.jpg";
import bird from "./assets/bird.jpg";
import reptile from "./assets/reptile.jpg";
import aquatics from "./assets/aquatics.jpg";

function HomeJumbotron() {

    return (
        <div className="jumbotron">
            <div className="wrapper">
                <div className="top-row">
                    <h1 className="display-4 main-txt"><strong>We Know Animals</strong></h1>
                    <hr className="my-4" />
                    <p className="lead main-txt">Atlas Pet was built on a passion for animals of all shapes. For more than 30 years we have worked hard to keep competitive prices and we pride ourselves on our friendly and knowledgeable staff. So whether you've been stopping in for years, or today is your first visit, we're ready to bring you our best. </p>
                </div>
                <div className="row-overlay"></div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <CategoryCard src={dog} alt={"Dog"} category={"Dog"} />
                </div>
                <div className="col-md-2">
                    <CategoryCard src={cat} alt={"Cat"} category={"Cat"} />
                </div>
                <div className="col-md-2">
                    <CategoryCard src={mammal} alt={"Small Mammal"} category={"Small Mammal"} />
                </div>
                <div className="col-md-2">
                    <CategoryCard src={bird} alt={"Birds"} category={"Bird"} />
                </div>
                <div className="col-md-2">
                    <CategoryCard src={reptile} alt={"Reptiles"} category={"Reptile"} />
                </div>
                <div className="col-md-2">
                    <CategoryCard src={aquatics} alt={"Aquatics"} category={"Aquatic"} />
                </div>
            </div>
        </div>
    )
}


export default HomeJumbotron;