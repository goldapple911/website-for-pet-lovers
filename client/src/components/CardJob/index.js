import React from 'react'
import './cardJob.css'

export default function JobCard({ job }) {
    return (
                        <div className="card-body job-card" key={job.id}>
                            <h2 className="card-title job-title text-center">{job.title}: {job.location}</h2>
                            <p className="job-text text-center">{job.classification}</p>
                            <p className="job-text text-center">{job.wage}</p>
                            <div className="hr" />
                            <p className="job-text">{job.description}</p>
                            <div className="hr" />
                            <p className="text-center job-text">Required Availability</p>
                            <p className="job-text text-center">{job.availability}</p>
                        </div>
    )
}
