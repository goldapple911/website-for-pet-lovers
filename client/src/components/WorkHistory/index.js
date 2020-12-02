import React, { useEffect, useState } from 'react'
import './workhistory.css'

export default function WorkHistory({ historyItem, db, currentUser, position }) {
    const [workHistory, setWorkHistory] = useState({
        company: "",
        title: "",
        start: "",
        end: "",
        leaveReason: "",
        description: ""
    });

    function handleCompanyChange(e) {
        console.log(workHistory);
        setWorkHistory({ ...workHistory, company: e.target.value });
        handleUpdate();
    };

    function handleTitleChange(e) {
        console.log(workHistory);
        setWorkHistory({ ...workHistory, title: e.target.value });
        handleUpdate();
    };

    function handleStartChange(e) {
        console.log(workHistory);
        setWorkHistory({ ...workHistory, start: e.target.value });
        handleUpdate();
    };

    function handleEndChange(e) {
        console.log(workHistory);
        setWorkHistory({ ...workHistory, end: e.target.value });
        handleUpdate();
    };

    function handleLeaveReasonChange(e) {
        console.log(workHistory);
        setWorkHistory({ ...workHistory, leaveReason: e.target.value });
        handleUpdate();
    };

    function handleDescriptionChange(e) {
        console.log(workHistory);
        setWorkHistory({ ...workHistory, description: e.target.value });
        handleUpdate();
    };


    const handleUpdate = () => {
        // Storing applications by grouping application field data under the position and location applied for.

        db.collection("applications").doc(currentUser.uid).set({
            ["Experience:" + historyItem]: workHistory
        }, { merge: true })
            .then(function () {
                console.log("Document successfully written!")
            })
            .catch(function (error) {
                console.error("Error writing document: ", error)
            });
    }


    return (
        <div className="row col-12 history-row">
            {/* Company Name */}
            <div className="col-md-6 input-area">
                <label className="app-label" htmlFor="companyName">Company Name</label>
                <input onChange={handleCompanyChange} type="text" name="companyName" className="riser app-input"></input>
            </div>

            {/* Job Title */}
            <div className="col-md-6 input-area">
                <label className="app-label" htmlFor="jobTitle">Job Title</label>
                <input onChange={handleTitleChange} type="text" name="jobTitle" className="riser app-input"></input>
            </div>

            {/* Start Date */}
            <div className="col-md-6 input-area">
                <label className="app-label" htmlFor="startDate">Start Date</label>
                <input onChange={handleStartChange} type="date" name="startDate" className="riser app-input"></input>
            </div>

            {/* End Date */}
            <div className="col-md-6 input-area">
                <label className="app-label" htmlFor="endDate">End Date</label>
                <input onChange={handleEndChange} type="date" name="endDate" className="riser app-input"></input>
            </div>

            {/* Reason for Leaving */}
            <div className="col-md-12 input-area">
                <label className="app-label" htmlFor="leftBecause">Reason for Leaving</label>
                <input onChange={handleLeaveReasonChange} type="text" name="leftBecause" className="riser app-input"></input>
            </div>

            {/* Responsibilities */}
            <div className="col-md-12 input-area">
                <label className="app-label" htmlFor="responsibilities">Responsibilities</label>
                <textarea onChange={handleDescriptionChange} type="text" rows="5" name="responsibilities" className="riser app-input"></textarea>
            </div>
            <div className="work-history-overlay"></div>
        </div>
    )
}

