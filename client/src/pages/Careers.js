import React from 'react'
import video from './assets/dogEating.mp4'
import Background from '../components/Background'

export default function index() {
    return (
        <main>
        <Background src={video}/>
        </main>
    )
}
