import React from 'react'
import video from './assets/dogEating.mp4'
import Background from '../components/Background'
import "./pages.css"

export default function index() {
    return (
        <main className="hide-overflow">
        <Background src={video}/>
        </main>
    )
}
