import React from 'react'
import './workhistory.css'

export default function WorkHistory() {
    return (
        <div className="row history-row">
            {/* Company Name */}
            <div className="col-md-4 input-area">
                <label className="app-label" for="companyName">Company Name</label>
                <input type="text" name="companyName" className="riser app-input"></input>
            </div>

            {/* Supervisor Name */}
            <div className="col-md-4 input-area">
                <label className="app-label" for="supervisorName">Supervisor</label>
                <input type="text" name="supervisorName" className="riser app-input"></input>
            </div>

            {/* Contact Number */}
            <div className="col-md-4 input-area">
                <label className="app-label" for="contactNumber">Phone</label>
                <input type="tel" name="contactNumber" className="riser app-input"></input>
            </div>

            {/* Job Title */}
            <div className="col-md-4 input-area">
                <label className="app-label" for="jobTitle">Job Title</label>
                <input type="text" name="jobTitle" className="riser app-input"></input>
            </div>

            {/* Start Date */}
            <div className="col-md-4 input-area">
                <label className="app-label" for="startDate">Start Date</label>
                <input type="date" name="startDate" className="riser app-input"></input>
            </div>

            {/* End Date */}
            <div className="col-md-4 input-area">
                <label className="app-label" for="endDate">End Date</label>
                <input type="date" name="endDate" className="riser app-input"></input>
            </div>

            {/* Reason for Leaving */}
            <div className="col-md-12 input-area">
                <label className="app-label" for="leftBecause">Reason for Leaving</label>
                <input type="text" name="leftBecause" className="riser app-input"></input>
            </div>

            {/* Responsibilities */}
            <div className="col-md-12 input-area">
                <label className="app-label" for="responsibilities">Responsibilities</label>
                <textarea type="text" rows="5" name="responsibilities" className="riser app-input"></textarea>
            </div>
            <div className="work-history-overlay"></div>
        </div>
    )
}

