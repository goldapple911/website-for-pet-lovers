import React from 'react';
import video from './assets/dogEating.mp4';
import Background from '../components/Background';
import ContactForm from '../components/ContactForm';
import "./pages.css"

export default function index() {
    return (
        <main className="hide-overflow">
            <Background src={video} />
            <div className="row">
                <div className="col-lg-7 contact-form">
                    <ContactForm />
                </div>
            </div>
        </main>
    )
}
