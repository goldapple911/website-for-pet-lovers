import React from 'react';
import Background from '../components/Background';
import FormContact from '../components/FormContact';
import "./style.css"

export default function index() {
    return (
        <main className="hide-overflow">
            <Background />
            <div className="row">
                <div className="col-lg-7 contact-form">
                    <FormContact />
                </div>
            </div>
        </main>
    )
}
