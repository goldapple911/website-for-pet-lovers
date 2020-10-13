import React from 'react'

export default function AppQuestion({ question }) {
    return (
        <div className="row">
            {/* Mapped question component */}
            <div className="col-md-12 input-area">
                <label className="app-label" htmlFor="responsibilities">{question}</label>
                <textarea type="text" rows="4" name="responsibilities" className="riser app-input"></textarea>
            </div>
        </div>
    )
}
