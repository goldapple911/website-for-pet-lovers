import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../pages/style.css'

function NavTabs() {

    const location = useLocation();

    return (
        <nav className="nav-background">
            <ul className="nav nav-links">
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
            </ul>
        </nav>
    )
}


export default NavTabs;