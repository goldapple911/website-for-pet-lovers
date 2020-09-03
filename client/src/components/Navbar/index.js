import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../../pages/style.css"
import logo from "../../pages/assets/logo.png"
import "./style.css"
import axios from "axios";

// import { get } from "mongoose"

function NavTabs() {

    const location = useLocation();

    return (
        <nav>
            <div className="nav-background">
                <div className="nav nav-links link-wrapper">
                    <div className="col-md-4">
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <div className="col-md-8">
                        <Link
                            to="/"
                            className={location.pathname === "/" ? "nav-link active-link" : "nav-link inactive-link"}
                        >
                            Home
                            </Link>
                        <Link
                            to="/ShopLocal"
                            className={location.pathname === "/ShopLocal" ? "nav-link active-link" : "nav-link inactive-link"}
                        >
                            Shop Atlas
                            </Link>
                        <Link
                            to="/Contact"
                            className={location.pathname === "/Contact" ? "nav-link active-link" : "nav-link inactive-link"}
                        >
                            Contact Us
                            </Link>
                        <Link
                            to="/Careers"
                            className={location.pathname === "/Careers" ? "nav-link active-link" : "nav-link inactive-link"}
                        >
                            Careers
                            </Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}


export default NavTabs;