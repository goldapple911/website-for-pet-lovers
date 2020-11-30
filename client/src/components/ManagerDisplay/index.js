import React, { useEffect } from 'react'
import AppSubmission from '../AppSubmission'

export default function index({ applications }) {
    console.log(applications)

    return (
        <div>
            {applications.map((app) => (
                <p>{app.fname}</p>
            ))}
        </div>

            
    )
}
