import React, { useState, useEffect, useContext } from 'react';
import Background from '../components/Background';
import "./style.css";
import jobData from "../utils/JobListings"
import JobCard from '../components/CardJob';
import app from '../utils/firebase';
import Application from '../components/Application'
import { AuthContext } from '../utils/AuthContext';
import firebase from 'firebase/app';
import trash from "../utils/Assets/trash.png";
import { useCollectionData } from 'react-firebase-hooks/firestore';


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
    const [applications, setApplications] = useState([]);
    const [fullApp, setFullApp] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [workHistory, setWorkHistory] = useState([]);
    const [editUser, setEditUser] = useState(false);
    const [applicationView, setApplicationView] = useState(false);
    const [appButton, setAppButton] = useState("View Applications")

    const fullApplication = (e) => {
        console.log("Target ID: ", e.target.id)
        for (let i = 0; i < applications.length; i++) {
            if (applications[i].uid === e.target.id) {
                let qAdd = [];
                let hAdd = [];
                setFullApp(applications[i])
                console.log(applications[i].Questions)
                for (const [key, value] of Object.entries(applications[i].Questions)) {
                    qAdd.push(value);
                    console.log(`${value.question}: ${value.response}`);
                }
                setQuestions(qAdd)
                for (const [key, value] of Object.entries(applications[i].Experience)) {
                    hAdd.push(value);
                }
                setWorkHistory(hAdd)
            }
        }
    }

    const toggleViewApplications = () => {
        if (applicationView) {
            setApplicationView(false)
            setAppButton("View Applications")
        } else if (!applicationView) {
            setApplicationView(true)
            setAppButton("Hide Applications")
        }
    }

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

        // db.collection("applications")
        //     .get()
        //     .then((querySnapshot) => {
        //         console.log(querySnapshot)
        //         querySnapshot.forEach((app) => {
        //             console.log(app.data())
        //             if (app.data().position.toLowerCase().toString().includes(managerLocation.toLowerCase())) {
        //                 applicationData.push(app.data())
        //             }
        //             setApplications(applicationData)
        //         })
        //     })


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

    const pullApplications = () => {
        db.collection("applications")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((app) => {
                    console.log(app.data())
                    if (app.data().position.toLowerCase().toString().includes(managerLocation.toLowerCase())) {
                        applicationData.push(app.data())
                    } else if (managerLocation === "All") {
                        applicationData.push(app.data())
                        console.log(applicationData)
                    }
                    setApplications(applicationData)
                })
                if (applicationData.length === 0) {
                    setApplications([{position: "No new applications!"}])
                }
            })
    }

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

    const deleteApplication = () => {
        console.log(fullApp)
        db.collection("deleted-applications").doc(`${fullApp.uid}`).set(fullApp)
        .then(function() {
            db.collection("applications").doc(`${fullApp.uid}`).delete()
            .then(function() {
                console.log("Document deleted!");
                setFullApp(null);
                pullApplications();
            });
        })
        .catch(function(error) {
            console.error("Error writing/deleting document: ", error);
        });
    }

    // console.log(managerList)
    return (
        <main className="hide-overflow">
            <Background />
            <div className="row">
                <div className="col-md-12 job-section user-page">
                    <div className="job-section-overlay"></div>
                    <div className="row">
                        <div className="col-md-12 text-center print-hide">
                            <div className="row top">
                                <div className="col-4">
                                    <button className="btn btn-light btn-filter" onClick={() => app.auth().signOut()}>Sign Out</button>
                                </div>
                                <div className="col-4">
                                    {isManager ? <button className="btn btn-light btn-filter" onClick={() => {toggleViewApplications(); pullApplications()}}>{appButton}</button> : null}
                                </div>
                                <div className="col-4">
                                    {/* <button className="btn btn-light btn-filter" onClick={() => { if (editUser) { setEditUser(false) } else { setEditUser(true) } }} >Account</button> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conditional statement to return back end user page to view submitted applications if user is on the manager list */}
                    {applicationView ?
                        <div className="row position-relative">
                            <section className="print-hide app-list mt-0 p-3 col-md-5">
                                <h1 className="size-24 text-center app-header-border pb-3">Submitted Applications</h1>
                                {applications.map((app, id) => (
                                    <button className="w-100 clear-btn-style app-list-item p-3 ml-auto mr-auto app-li-border position-relative" onClick={fullApplication} id={app.uid} key={id}>
                                        <h2 className="size-20" id={app.uid}>{app.position}</h2>
                                        <p className="size-20 m-0" id={app.uid}>{app.fname} {app.lname}</p>
                                    </button>
                                ))}
                            </section>
                            <section className="col-md-7 p-3 app-list position-relative print-width">
                                <h1 className="size-24 text-center app-header-border pb-3 print-hide">Details</h1>
                                <div className="position-relative">
                                    {fullApp ?
                                        <div className="container">
                                            <button className="position-absolute close-btn-manager print-hide button-size" onClick={() => { setFullApp(null) }}>X</button>
                                            <button className="position-absolute delete-btn-manager print-hide button-size" onClick={deleteApplication}><img src={trash} alt="logo" className="trash-icon" /></button>
                                            <h2 className="size-20 text-center">{fullApp.position}</h2>

                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="app-info-display"><span className="app-info-bold">Applicant Name:</span> {fullApp.fname} {fullApp.lname}</p>
                                                    <p className="app-info-display"><span className="app-info-bold">Date of Birth:</span> {fullApp.dob}</p>
                                                    <p className="app-info-display"><span className="app-info-bold">Avalable to start:</span> {fullApp.start}</p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="app-info-display"><span className="app-info-bold">Email:</span> {fullApp.email}</p>
                                                    <p className="app-info-display"><span className="app-info-bold">Phone:</span> {fullApp.phone}</p>
                                                </div>
                                            </div>

                                            {workHistory.map((data, id) => (
                                                <div key={id}>
                                                    <p className="app-info-bold text-center">Work History</p>
                                                    <p className="app-info-display"><span className="app-info-bold">Title:</span> {data.title}</p>
                                                    <p className="app-info-display"><span className="app-info-bold">Dates:</span> {data.start} - {data.end}</p>
                                                    <p className="app-info-display"><span className="app-info-bold">Company:</span> {data.company}</p>
                                                    <p className="app-info-display"><span className="app-info-bold">Job Details:</span> {data.description}</p>
                                                    <br />
                                                </div>
                                            ))}
                                            <br />
                                            <p className="app-info-bold text-center">Application Questions</p>
                                            {questions.map((question, id) => (
                                                <div key={id}>
                                                    <p className="app-info-display"><span className="app-info-bold">{question.question}</span></p>
                                                    <p>{question.response}</p>
                                                </div>
                                            ))}


                                        </div> : null}

                                </div>

                            </section>

                        </div>
                        : null}

                    <>
                        {/* Conditional statement to return the application form or open position search based on state changes */}
                        {!applicationView ?
                            <>
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
                            </>
                            : null}

                    </>


                </div>
            </div>
        </main >
    )

}
