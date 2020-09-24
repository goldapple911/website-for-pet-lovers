import React, { useState, useEffect, useContext } from 'react';
import Background from '../components/Background';
import "./style.css";
import jobData from "../utils/JobListings"
import JobCard from '../components/CardJob';
import app from '../utils/firebase';
import { AuthContext } from '../utils/AuthContext';

export default function User() {
    let currentPositions = [];
    let currentPositionsBlaine = [];
    let currentPositionsStillwater = [];
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        console.log(currentUser.displayName)
        for (let i = 0; i < jobData.alljobs.length; i++) {
            if (jobData.alljobs[i].available === true) {
                currentPositions.push(jobData.alljobs[i])
                if (jobData.alljobs[i].location === "Blaine") {
                    currentPositionsBlaine.push(jobData.alljobs[i])
                } else if (jobData.alljobs[i].location === "Stillwater") {
                    currentPositionsStillwater.push(jobData.alljobs[i])
                }
            }
        }
        setJobState({
            all: currentPositions,
            Blaine: currentPositionsBlaine,
            Stillwater: currentPositionsStillwater
        })
        setJobs(currentPositions)
    }, [])

    const [jobState, setJobState] = useState({
        all: [],
        Blaine: [],
        Stillwater: []
    })

    const [jobs, setJobs] = useState([])

    const handleLocationChange = (e) => {
        if (e.target.value === "Blaine") {
            setJobs(jobState.Blaine)
        } else if (e.target.value === "Stillwater") {
            setJobs(jobState.Stillwater)
        } else {
            setJobs(jobState.all)
        }
    }

    return (
        <main className="hide-overflow">
            <Background />
            <div className="row">
                <div className="col-md-12 job-section user-page">
                    <div className="job-section-overlay"></div>
                    <div>
                        <div className="row">
                            <div className="col-md-12 text-center job-header">
                                <h1 className="section-title">{currentUser.displayName ? currentUser.displayName : "User"}</h1>
                                <p className="e-text">{currentUser.email}</p>
                                <button className="btn btn-light btn-filter sign-out" onClick={() => app.auth().signOut()}>Sign Out</button>
                                <button className="btn btn-light btn-filter edit" /*onClick={}*/>Edit Info</button>
                                <h2 className="section-title">Available Positions</h2>
                            </div>

                        </div>

                        <div className="col-md-12 text-center">
                            <button type="button" className="btn btn-light btn-filter" onClick={handleLocationChange} value="all">All Locations</button>
                            <button type="button" className="btn btn-light btn-filter" onClick={handleLocationChange} value="Blaine">Blaine</button>
                            <button type="button" className="btn btn-light btn-filter" onClick={handleLocationChange} value="Stillwater">Stillwater</button>

                            <div className="row">
                                {jobs.map((job) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <JobCard
                                            job={job}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}
