import React, { useState, useEffect } from 'react'
import WorkHistory from '../WorkHistory'
import AppQuestion from '../AppQuestion'
import ApplicationContent from '../../utils/ApplicationContent'
import "./application.css"
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

    const [applicantInfo, setApplicantInfo] = useState({
        position: position,
        fname: "",
        lname: "",
        dob: "",
        phone: "",
        email: "",
        start: "",
        updated: firebase.firestore.FieldValue.serverTimestamp(),
        uid: currentUser.uid
    });

    function handleFnameChange(e) {
        console.log(workHistory);
        setApplicantInfo({ ...applicantInfo, fname: e.target.value });
    };

    function handleLnameChange(e) {
        console.log(applicantInfo);
        setApplicantInfo({ ...applicantInfo, lname: e.target.value });
    };

    function handleDobChange(e) {
        console.log(applicantInfo);
        setApplicantInfo({ ...applicantInfo, dob: e.target.value });
    };

    function handlePhoneChange(e) {
        console.log(applicantInfo);
        setApplicantInfo({ ...applicantInfo, phone: e.target.value });
    };

    function handleEmailChange(e) {
        console.log(applicantInfo);
        setApplicantInfo({ ...applicantInfo, email: e.target.value });
    };

    function handleStartChange(e) {
        console.log(applicantInfo);
        setApplicantInfo({ ...applicantInfo, start: e.target.value });
    };

    const handleApplicationSubmit = (e) => {
        e.preventDefault()
        db.collection("applications").doc(currentUser.uid).set({
            ...applicantInfo
        }, { merge: true })
            .then(function () {
                console.log("Document successfully written!");
                setApply(false)
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
                        <input onChange={handleFnameChange} type="text" id="fname" name="fname" className="riser app-input"></input>
                    </div>

                    {/* Last Name */}
                    <div className="col-md-4 input-area">
                        <label className="app-label">Last Name</label>
                        <input onChange={handleLnameChange} type="text" id="lname" name="lname" className="riser app-input"></input>
                    </div>

                    {/* Date of Birth */}
                    <div className="col-md-4 input-area">
                        <label className="app-label">Date of Birth</label>
                        <input onChange={handleDobChange} type="date" id="birthDate" name="birthDate" className="riser app-input"></input>
                    </div>

                    {/* Phone */}
                    <div className="col-md-4 input-area">
                        <label className="app-label">Phone</label>
                        <input onChange={handlePhoneChange} type="tel" id="tel" name="tel" className="riser app-input"></input>
                    </div>

                    {/* Email */}
                    <div className="col-md-4 input-area">
                        <label className="app-label">Email</label>
                        <input onChange={handleEmailChange} type="email" id="email" name="email" className="riser app-input"></input>
                    </div>

                    {/* Start Date */}
                    <div className="col-md-4 input-area">
                        <label className="app-label">When are you available to start?</label>
                        <input onChange={handleStartChange} type="date" id="hireDate" name="hireDate" className="riser app-input"></input>
                    </div>
                </div>
                <div className="row application-section">
                    {/* Expandable work history section */}
                    {workHistory > 0 ? <WorkHistory historyItem={1} db={db} currentUser={currentUser} position={position} /> : null}
                    {workHistory > 1 ? <WorkHistory historyItem={2} db={db} currentUser={currentUser} position={position} /> : null}
                    {workHistory > 2 ? <WorkHistory historyItem={3} db={db} currentUser={currentUser} position={position} /> : null}
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
                {questions.map((question, i) => (
                    <div key={i}>
                        <AppQuestion qid={i} question={question} db={db} currentUser={currentUser} position={position} />
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
