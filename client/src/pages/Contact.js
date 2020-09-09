import React from 'react';
import video from './assets/dogEating.mp4';
import Background from '../components/Background';
import ContactForm from '../components/ContactForm';
import LocatorMap from '../components/LocatorMap';

export default function index() {
    return (
        <main>
            <Background src={video} />
            <div className="row">
                <div className="col-md-7">
                    <LocatorMap />
                </div>
                <div className="col-md-5">
                    <ContactForm />
                </div>
            </div>
        </main>
    )
}
