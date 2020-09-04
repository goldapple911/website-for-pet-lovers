import React from 'react'
import video from './assets/dogEating.mp4'
import Background from '../components/Background'
import ContactForm from '../components/ContactForm'

export default function index() {
    return (
        <main>
        <Background src={video}/>
        <div className="col-md-6">

        </div>
        <div className="col-md-6">
            <ContactForm />
        </div>
        </main>
    )
}
