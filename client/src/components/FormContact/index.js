import React, { useState } from "react";
import axios from "axios";
import "../../pages/style.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
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

    function handleMessageChange(e) {
        setFormData({ ...formData, message: e.target.value })
    };

    return (
        <div className="jumbotron form-spacing">
            <form className="form">
                <h1 className="display-4 main-txt"><strong>Drop a Line</strong></h1>
                <br/>
                <div className="hr"></div>
                <br/>
                <p className="lead main-txt">Questions, Comments, Concerns? Let us know!</p>
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
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleEmailChange}
                ></input>
                <br />
                {/* Message input */}
                <label htmlFor="message">Message</label>
                <textarea
                    className="inputs"
                    rows="6"
                    id="message"
                    name="message"
                    onChange={handleMessageChange}
                ></textarea>
                {/* Submit button */}
                <button
                    className="submit-btn btn btn-light btn-submit"
                    type="submit"
                    value="Send Message"
                    onClick={sendEmail}
                >Send Message</button>
            </form>
            <div className="row-overlay"></div>
        </div>
    )
}


export default ContactForm;