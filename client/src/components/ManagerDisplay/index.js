import React, { useEffect } from 'react'
import '../../pages/style.css'

export default function index({ applications }) {
    console.log(applications)
    return (
        <div className="row">
            <section className="app-list mt-0 p-3 col-md-5">
                <h1 className="size-24 text-center app-header-border pb-3">Submitted Applications</h1>
                {applications.map((app, id) => (
                    <div className="app-list-item p-3 ml-auto mr-auto app-li-border" key={id}>
                        <h2 className="size-20">{app.position}</h2>
                        <p className="size-20 m-0">{app.fname} {app.lname}</p>
                    </div>

                ))}
            </section>
            <section className="col-md-7 p-3 app-list">
                <h1 className="size-24 text-center app-header-border pb-3">Details</h1>
                <div>

                </div>

            </section>

        </div>


    )
}
