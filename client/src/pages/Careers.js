import React, { useState, useEffect, componentDidMount } from 'react';
import Background from '../components/Background';
import "./style.css";
import jobData from "../utils/JobListings"
import JobCard from '../components/JobCard';

export default function Careers() {
    const alljobs = jobData.alljobs
    const [jobs, setJobs] = useState(jobData.alljobs)

    const handleLocationChange = (e) => {
        let jobSet = [];
        for (let i = 0; i < alljobs.length; i++) {
            if (e.target.value === alljobs[i].location) {
                jobSet.push(alljobs[i])
            }
        }
        setJobs(jobSet)
    }
    return (
        <main className="hide-overflow">
            <Background />
            <div className="col-md-6">
                <JobCard
                    jobs={jobs}
                />
            </div>
        </main>
    )

}
