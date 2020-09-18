import React, { useState } from "react";
import axios from "axios";
// import "./style.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    function sendEmail(e) {
        e.preventDefault();
        axios.post("/send", formData)
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
    };

    function handleNameChange(e) {
        setFormData({ ...formData, name: e.target.value })
    };

    function handleEmailChange(e) {
        setFormData({ ...formData, email: e.target.value })
    };

    return (
        <div className="jumbotron">
            <form className="form">
                <h1 className="display-4 main-txt"><strong>Signup</strong></h1>
                <hr className="my-4" />
                <p className="lead main-txt">Questions, Comments, Concerns?</p>
                <p className="lead main-txt">Here's your chance to let us know!</p>
                {/* Name input */}
                <label htmlFor="name">Name</label>
                <input
                    className="inputs"
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleNameChange}
                ></input>
                <br />
                {/* Email input */}
                <label htmlFor="email">Email</label>
                <input
                    className="inputs"
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleEmailChange}
                ></input>
                <br />
                {/* Submit button */}
                <input
                    className="submit-btn"
                    type="submit"
                    value="Send Message"
                    onClick={sendEmail}
                ></input>
            </form>
            <div className="row-overlay"></div>
        </div>
    )
}


export default ContactForm;