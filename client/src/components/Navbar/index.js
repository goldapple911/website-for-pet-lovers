import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../../pages/style.css"
import logo from "../../pages/assets/logo.png"
import "./navbar.css"

function NavTabs() {

    const location = useLocation();

    return (
        <nav className="print-hide">
            <div className="nav-background">
                <div className="nav nav-links nav-wrapper">
                    <div className="col-md-4">
                        <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
                    </div>
                    <div className="col-md-8">
                        <Link
                            to="/"
                            className={location.pathname === "/" ? "nav-link active-link" : "nav-link inactive-link"}
                        >
                            Home
                            </Link>

                        <div className={location.pathname === "/Shop-Local" ? "nav-link active-link d-down" : "nav-link inactive-link d-down"}>
                            Shop Atlas
                            <div className="dropdown">
                                <Link
                                    to="/Shop-Local"
                                    className="dropdown-link"
                                >
                                    In Store
                                </Link>
                                <a className="dropdown-link" href="https://shop.atlaspet.net/products/list/" target="_blank" rel="noopener noreferrer">Online</a>
                            </div>
                        </div>

                        {/* <Link
                            to="/Contact"
                            className={location.pathname === "/Contact" ? "nav-link active-link" : "nav-link inactive-link"}
                        >
                            Contact Us
                            </Link> */}

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