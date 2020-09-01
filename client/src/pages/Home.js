import React from 'react'
import './style.css'
import videos from './assets/dogEating.mp4'
import HomeJumbotron from '../components/HomeJumbotron'

export default function index() {
    return (
        <main>
        <div className="video-container">
            
            <video autoPlay="autoplay" muted loop="loop" className="cover-video">
                <source src={videos} type="video/mp4" />
            </video>
            
        </div>
        <div className="overlay">
        </div>
        <HomeJumbotron />
        </main>
    )
}
