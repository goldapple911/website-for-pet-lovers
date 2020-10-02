import React, { useState, useEffect } from 'react'
import WorkHistory from '../WorkHistory'
import AppQuestion from '../AppQuestion'
import ApplicationContent from '../../utils/ApplicationContent'
import "./application.css"

export default function Application() {
    const { content } = ApplicationContent;
    const [workHistory, setWorkHistory] = useState(0);

    // Need to set as empty and pass in from Careers but testing works 
    const [selectedJob, setSelectedJob] = useState("Team Leader");
    const [selectedLocation, setSelectedLocation] = useState("Blaine");
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // useEffect hook to populate the questions on the application based off of selected job and location.
        for (let i = 0; i < content.length; i++) {
            if (content[i].title === selectedJob && content[i].location === selectedLocation) {
                setQuestions(content[i].questions)
            }
        }
    }, [])

    return (
        <div>
            <form className="application-form">
                <div className="row">
                    {/* First Name */}
                    <div className="col-md-4 input-area">
                        <label>First Name</label>
                        <input type="text" id="fname" name="fname" className="riser app-input"></input>
                    </div>

                    {/* Last Name */}
                    <div className="col-md-4 input-area">
                        <label>Last Name</label>
                        <input type="text" id="lname" name="lname" className="riser app-input"></input>
                    </div>

                    {/* Date of Birth */}
                    <div className="col-md-4 input-area">
                        <label>Date of Birth</label>
                        <input type="date" id="birthDate" name="birthDate" className="riser app-input"></input>
                    </div>

                    {/* Phone */}
                    <div className="col-md-4 input-area">
                        <label>Phone</label>
                        <input type="tel" id="tel" name="tel" className="riser app-input"></input>
                    </div>

                    {/* Email */}
                    <div className="col-md-4 input-area">
                        <label>Email</label>
                        <input type="email" id="email" name="email" className="riser app-input"></input>
                    </div>

                    {/* Start Date */}
                    <div className="col-md-4 input-area">
                        <label>When are you available to start?</label>
                        <input type="date" id="hireDate" name="hireDate" className="riser app-input"></input>
                    </div>
                </div>

                {/* Expandable work history section */}
                {workHistory > 0 ? <WorkHistory /> : null}
                {workHistory > 1 ? <WorkHistory /> : null}
                {workHistory > 2 ? <WorkHistory /> : null}
                {workHistory < 3 ?
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
                    : null}

                {questions.map((question) => (
                    <div>
                        <AppQuestion question={question} />
                    </div>
                ))}
            </form>
        </div>
    )
}
