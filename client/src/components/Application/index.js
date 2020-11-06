import React, { useState, useEffect } from 'react'
import WorkHistory from '../WorkHistory'
import AppQuestion from '../AppQuestion'
import ApplicationContent from '../../utils/ApplicationContent'
import "./application.css"
import { v4 as uuidv4 } from 'uuid';
import app from '../../utils/firebase';
// Importing firebase SDK
import firebase from 'firebase/app';
// Importing firestore database
import 'firebase/firestore';

export default function Application({ position, setApply, currentUser }) {
    const { content } = ApplicationContent;
    const [workHistory, setWorkHistory] = useState(0);

    var db = firebase.firestore(app)

    // Need to set as empty and pass in from Careers but testing works 
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // useEffect hook to populate the questions on the application based off of selected job and location.
        for (let i = 0; i < content.length; i++) {
            if (content[i].title + ": " + content[i].location === position) {
                setQuestions(content[i].questions)
            }
        }
    }, [])

    const handleApplicationSubmit = (e) => {
        e.preventDefault()
        db.collection("applications").doc(currentUser.uid).collection("userData").doc("user").set({
            name: currentUser.displayName,
            email: currentUser.email,
            phone: currentUser.phoneNumber,
            updated: firebase.firestore.FieldValue.serverTimestamp()
        })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }

    return (
        <main className="application-form-wrapper">
            <form className="application-form">
                <h1 className="app-title">{position}</h1>

                <button
                    className="submit-btn btn btn-light btn-submit close-btn"
                    type="button"
                    onClick={() => { setApply(false) }}
                >
                    X
                </button>

                <div className="row application-section">
                    {/* First Name */}
                    <div className="col-md-4 input-area">
                        <label className="app-label">First Name</label>
                        <input type="text" id="fname" name="fname" className="riser app-input"></input>
                    </div>

                    {/* Last Name */}
                    <div className="col-md-4 input-area">
                        <label className="app-label">Last Name</label>
                        <input type="text" id="lname" name="lname" className="riser app-input"></input>
                    </div>

                    {/* Date of Birth */}
                    <div className="col-md-4 input-area">
                        <label className="app-label">Date of Birth</label>
                        <input type="date" id="birthDate" name="birthDate" className="riser app-input"></input>
                    </div>

                    {/* Phone */}
                    <div className="col-md-4 input-area">
                        <label className="app-label">Phone</label>
                        <input type="tel" id="tel" name="tel" className="riser app-input"></input>
                    </div>

                    {/* Email */}
                    <div className="col-md-4 input-area">
                        <label className="app-label">Email</label>
                        <input type="email" id="email" name="email" className="riser app-input"></input>
                    </div>

                    {/* Start Date */}
                    <div className="col-md-4 input-area">
                        <label className="app-label">When are you available to start?</label>
                        <input type="date" id="hireDate" name="hireDate" className="riser app-input"></input>
                    </div>
                </div>
                <div className="row application-section">
                    {/* Expandable work history section */}
                    {workHistory > 0 ? <WorkHistory historyItem={1} db={db} currentUser={currentUser} /> : null}
                    {workHistory > 1 ? <WorkHistory historyItem={2} db={db} currentUser={currentUser} /> : null}
                    {workHistory > 2 ? <WorkHistory historyItem={3} db={db} currentUser={currentUser} /> : null}
                    {workHistory < 3 ?
                        <div>
                            <button
                                className="submit-btn btn btn-light btn-submit"
                                type="button"
                                onClick={() => {
                                    setWorkHistory(workHistory + 1)
                                    console.log(workHistory)
                                }}
                            >
                                + Experience
                            </button>
                        </div>
                        : null}
                </div>
                {questions.map((question) => (
                    <div key={uuidv4()}>
                        <AppQuestion question={question} />
                    </div>
                ))}
                <button
                    type="submit"
                    className="submit-btn btn btn-light btn-submit"
                    onClick={handleApplicationSubmit}
                >
                    Submit Application
                </button>
            </form>
        </main>
    )
}
