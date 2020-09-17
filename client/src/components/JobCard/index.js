import React from 'react'

export default function JobCard({ jobs }) {
    return (
        <div className="row">
            {jobs.map((job) => (
                <div className="col-md-6 card" key={job.id}>
                    <div className="card-body">
                        {job.location}
                    </div>
                </div>
            ))}
        </div>
    )
}
