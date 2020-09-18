import React from 'react'
import './cardJob.css'

export default function JobCard({ jobs }) {
    return (
            <div className="row">
                {jobs.map((job) => (
                    <div className="col-lg-6 card" key={job.id}>
                        <div className="card-body job-card">
                            <h2 className="card-title job-title text-center">{job.title}: {job.location}</h2>
                            <p className="job-text text-center">{job.classification}</p>
                            <p className="job-text text-center">{job.wage}</p>
                            <div className="hr" />
                            <p className="job-text">{job.description}</p>
                            <div className="hr" />
                            <p className="text-center job-text">Required Availability</p>
                            <p className="job-text text-center">{job.availability}</p>
                        </div>
                    </div>
                ))}
            </div>
    )
}
