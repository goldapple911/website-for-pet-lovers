import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../../pages/style.css"
import logo from "../../pages/assets/logo.png"
import "./style.css"

function NavTabs() {

    const location = useLocation();

    return (
        <nav>
            <div className="nav-background">
                <ul className="nav nav-links">
                    <div className="col-md-3">
                    <img src={logo} alt="logo" className="logo" />
                    </div>
                    <div className="nav col-md-9">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={location.pathname === "/" ? "nav-link active-link" : "nav-link inactive-link"}
                        >
                            Home
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/ShopLocal"
                            className={location.pathname === "/ShopLocal" ? "nav-link active-link" : "nav-link inactive-link"}
                        >
                            Shop Atlas
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Contact"
                            className={location.pathname === "/Contact" ? "nav-link active-link" : "nav-link inactive-link"}
                        >
                            Contact Us
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Careers"
                            className={location.pathname === "/Careers" ? "nav-link active-link" : "nav-link inactive-link"}
                        >
                            Careers
                    </Link>
                    </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}


export default NavTabs;