import React, { useState } from "react";
import "./style.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function sendEmail(e) {
        e.preventDefault();
        fetch("/send",
            {
                method: "POST",
                body: formData,
            })
            .then(() => {
                // $("#send-msg").addClass("send-confirmation");
                // setTimeout(() => {
                //     $("#send-msg").removeClass("send-confirmation");
                // }, 3000);
            })
            .catch(err => console.log(err))
    };

    function checkStateChange(e) {
        e.preventDefault()
        console.log(formData)
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
        <div className="jumbotron">
            <form className="form">
                <h1 className="display-4 main-txt"><strong>Drop a Line!</strong></h1>
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