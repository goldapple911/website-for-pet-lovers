import React, { useState } from 'react'
import WorkHistory from '../WorkHistory'
import "./application.css"

export default function Application() {
    const [workHistory, setWorkHistory] = useState(0)

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
            </form>
        </div>
    )
}
