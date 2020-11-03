import React, { useState, useEffect, useContext } from 'react';
import Background from '../components/Background';
import "./style.css";
import jobData from "../utils/JobListings"
import JobCard from '../components/CardJob';
import app from '../utils/firebase';
import Application from '../components/Application'
import { AuthContext } from '../utils/AuthContext';
// import * as firebase from 'firebase/app';


export default function User() {
    let currentPositions = [];
    let currentPositionsBlaine = [];
    let currentPositionsStillwater = [];

    const [apply, setApply] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const [position, setPosition] = useState();

    // Firebase State Testing
    // const [firebaseUser, setFirebaseUser] = useState()

    useEffect(() => {
        // Read all potential jobdata
        for (let i = 0; i < jobData.alljobs.length; i++) {
            // Check to see if the job is currently hiring
            if (jobData.alljobs[i].available === true) {
                // Push all jobs that are hiring to currentPositions
                currentPositions.push(jobData.alljobs[i])
                // Push all jobs hiring for Blaine to currentPositionsBlaine
                if (jobData.alljobs[i].location === "Blaine") {
                    currentPositionsBlaine.push(jobData.alljobs[i])
                }
                // Push all jobs hiring for Stillwater to currentPositionsStillwater
                else if (jobData.alljobs[i].location === "Stillwater") {
                    currentPositionsStillwater.push(jobData.alljobs[i])
                }
            }
        }

        console.log(currentUser)
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
                    <div className="row">
                        <div className="col-md-12 text-center job-header">
                            <h1 className="section-title">{currentUser.displayName ? currentUser.displayName : "User"}</h1>
                            <p className="e-text">{currentUser.email}</p>
                            <button className="btn btn-light btn-filter sign-out" onClick={() => app.auth().signOut()}>Sign Out</button>
                            <button className="btn btn-light btn-filter edit" /*onClick={}*/>Edit Info</button>
                        </div>
                    </div>


                    {apply ? <Application position={position} currentUser={currentUser} setApply={setApply}/> :
                        <div className="col-md-12 text-center">
                            <button type="button" className="btn btn-light btn-filter" onClick={handleLocationChange} value="all">All Locations</button>
                            <button type="button" className="btn btn-light btn-filter" onClick={handleLocationChange} value="Blaine">Blaine</button>
                            <button type="button" className="btn btn-light btn-filter" onClick={handleLocationChange} value="Stillwater">Stillwater</button>

                            <div className="row">
                                {jobs.map((job) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6" key={job.id}>
                                        <JobCard
                                            job={job}
                                        />
                                    <div className="job-overlay" onClick={(e) => { setApply(true); setPosition(e.target.id) }} id={job.title + ": " + job.location}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }

                </div>
            </div>
        </main>
    )

}
