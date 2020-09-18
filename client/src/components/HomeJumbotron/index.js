import React from "react";
import "./homeJumbotron.css";
import "../../pages/style.css"

function HomeJumbotron() {

    return (
        <div className="jumbotron">
            <div className="wrapper">
                <div className="top-row">
                    <h1 className="display-4 main-txt"><strong>We Know Animals</strong></h1>
                    <br/>
                    <div className="hr"></div>
                    <br/>
                    <p className="lead main-txt">Atlas Pet was built on a passion for animals of all shapes. For more than 30 years we have worked hard to keep competitive prices and we pride ourselves on our friendly and knowledgeable staff. So whether you've been stopping in for years, or today is your first visit, we're ready to bring you our best. </p>
                </div>
                <div className="row-overlay"></div>
            </div>
        </div>
    )
}

export default HomeJumbotron;