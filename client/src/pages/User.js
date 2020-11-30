import React, { useState, useEffect, useContext } from 'react';
import Background from '../components/Background';
import "./style.css";
import jobData from "../utils/JobListings"
import JobCard from '../components/CardJob';
import app from '../utils/firebase';
import Application from '../components/Application'
import { AuthContext } from '../utils/AuthContext';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ManagerDisplay from '../components/ManagerDisplay'
// import * as firebase from 'firebase/app';


export default function User() {
    let currentPositions = [];
    let currentPositionsBlaine = [];
    let currentPositionsStillwater = [];
    let applicationData = [];

    var db = firebase.firestore(app)

    const [apply, setApply] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const [position, setPosition] = useState();
    const [isManager, setIsManager] = useState(false);
    const [managerLocation, setManagerLocation] = useState("");
    const [applications, setApplications] = useState([])



    const [editUser, setEditUser] = useState(false);

    useEffect(() => {

        // Sets a user's account level after cross referencing the manager list in the database.
        db.collection("managers")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.data())
                    console.log(doc.data().uid)
                    if (doc.data().uid === currentUser.uid) {
                        setIsManager(true)
                        setManagerLocation(doc.data().location)
                    } else {

                    }
                })
            })

        db.collection("applications")
            .get()
            .then((querySnapshot) => {
                console.log(querySnapshot)
                querySnapshot.forEach((app) => {
                    console.log(app.data())
                    if (app.data().position.toLowerCase().toString().includes(managerLocation.toLowerCase())) {
                        applicationData.push(app.data())
                    }
                    setApplications(applicationData)
                })
            })

        // For loop to populate state with current job openings
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

        // console.log(currentUser)
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

    // console.log(managerList)
    return (
        <main className="hide-overflow">
            <Background />
            <div className="row">
                <div className="col-md-12 job-section user-page">
                    <div className="job-section-overlay"></div>
                    <div className="row">
                        <div className="col-md-12 text-center job-header">
                            <button className="btn btn-light btn-filter sign-out" onClick={() => app.auth().signOut()}>Sign Out</button>
                            <button className="btn btn-light btn-filter edit" onClick={() => { if (editUser) { setEditUser(false) } else { setEditUser(true) } }} >Account</button>
                        </div>
                    </div>

                    {/* Conditional statement to return back end user page to view submitted applications if user is on the manager list */}
                    {isManager ? <ManagerDisplay applications={applications} /> : <>

                        {/* Conditional statement to return the application form or open position search based on state changes */}
                        {apply ? <Application position={position} currentUser={currentUser} setApply={setApply} /> :
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
                    </>}


                </div>
            </div>
        </main>
    )

}
