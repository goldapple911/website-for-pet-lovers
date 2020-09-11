import React, { useContext } from 'react'
import CategoryCard from '../components/CategoryCard'
import websiteData from "../utils/SiteData"
import { ClientContext } from "../utils/ClientContext";

export default function ShopByCategory() {
    const context = useContext(ClientContext)
    console.log(context)
    return (
        <div>
            {/* <CategoryCard /> */}
        </div>
    )
}
