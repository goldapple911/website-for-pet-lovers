import React, { useState } from 'react'

export default function AppQuestion({ qid, question, currentUser, db, position }) {
    const [questionResponse, setQuestionResponse] = useState({
        question: question,
        response: ""
    });

    function handleResponseChange(e) {
        console.log(questionResponse);
        setQuestionResponse({ ...questionResponse, response: e.target.value });
        handleUpdate();
    };

    const handleUpdate = () => {
        // Storing applications by grouping application field data under the position and location applied for.
            db.collection("applications").doc(currentUser.uid).collection("questions").doc(`Question ${qid}`).set({
                questionResponse: questionResponse
            })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
    }

    return (
        <div className="row">
            {/* Mapped question component */}
            <div className="col-md-12 input-area">
                <label className="app-label" htmlFor="responsibilities">{question}</label>
                <textarea onChange={handleResponseChange} type="text" rows="4" name="responsibilities" className="riser app-input"></textarea>
            </div>
        </div>
    )
}
