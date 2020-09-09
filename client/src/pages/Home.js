import React from 'react'
import dog from './assets/dogEating.mp4'
import HomeJumbotron from '../components/HomeJumbotron'
import Background from '../components/Background'

export default function index() {

    return (
        <main>
        <Background src={dog}/>
        <HomeJumbotron />
        </main>
    )
}
