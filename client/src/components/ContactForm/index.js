import React from "react";
import "./style.css";

function ContactForm() {

    return (
        <div className="jumbotron">
                <form className="form">
                    <h1 className="display-4 main-txt"><strong>Drop a Line!</strong></h1>
                    <hr className="my-4" />
                    <p className="lead main-txt">Questions, Comments, Concerns?</p>
                    <p className="lead main-txt">Here's your chance to let us know!</p>
                    <label htmlFor="name">Name</label>
                    <input className="inputs" type="text" id="name" name="name"></input>
                    <br />
                    <label htmlFor="email">Email</label>
                    <input className="inputs" type="text" id="email" name="email"></input>
                    <br />
                    <label htmlFor="message">Message</label>
                    <textarea className="inputs" rows="6" id="message" name="message"></textarea>
                    <input className="submit-btn" type="submit" value="Send Message"></input>
                </form>
                <div className="row-overlay"></div>
        </div>
    )
}


export default ContactForm;