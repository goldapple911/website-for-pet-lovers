import React, { useState } from "react";
import axios from "axios";
import "./formSignup.css";

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
        <div className="jumbotron form-spacing">
            <form className="form">
                <h1 className="display-4 main-txt signup-login"><strong>Signup</strong></h1>
                <p className="lead main-txt">Create an account and apply today!</p>
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
                <button
                    className="submit-btn btn-submit"
                    type="submit"
                    onClick={sendEmail}
                >Submit</button>
                <p className="lead signup-login-txt">Already have an account? <button className="text-button">Login Here</button></p>
            </form>
            <div className="row-overlay"></div>
        </div>
    )
}


export default ContactForm;