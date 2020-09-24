import React, { useState } from "react";
import { withRouter } from 'react-router';
import app from '../../utils/firebase';
import "./formSignup.css";

function FormSignup({ toggleForm, history }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        retypePassword: ""
    });

    // Function to sign up user via firebase.
      const handleSignUp =
        async event => {
        console.log(formData)
        event.preventDefault();
        try {
            await app
            .auth()
            .createUserWithEmailAndPassword(formData.email, formData.password);
            history.push('/User-Page');
        } 
        catch (error) {
            console.log('Signup Form Error: ', error);
        }
    };
    
    function handleNameChange(e) {
        console.log(formData)
        setFormData({ ...formData, name: e.target.value })
    };

    function handleEmailChange(e) {
        setFormData({ ...formData, email: e.target.value })
    };

    function handlePasswordChange(e) {
        setFormData({ ...formData, password: e.target.value })
    };

    function handleRetypePasswordChange(e) {
        setFormData({ ...formData, retypePassword: e.target.value })
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

                {/* Email input */}
                <label htmlFor="email">Email</label>
                <input
                    className="inputs"
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleEmailChange}
                ></input>

                {/* Password input */}
                <label htmlFor="password">Password</label>
                <input
                    className="inputs"
                    type="password"
                    id="password"
                    name="password"
                    onChange={handlePasswordChange}
                ></input>

                {/* Password Confirmation input */}
                <label htmlFor="password">Retype Password</label>
                <input
                    className="inputs"
                    type="password"
                    id="retype-password"
                    name="retype-password"
                    onChange={handleRetypePasswordChange}
                ></input>

                {/* Submit button */}
                <button
                    className="submit-btn btn-submit"
                    type="submit"
                    onClick={handleSignUp}
                >Submit</button>
                <p className="lead signup-login-txt">Already have an account? <button className="text-button" type="button" onClick={toggleForm}>
                        Login Here
                    </button>
                </p>
            </form>
            <div className="row-overlay"></div>
        </div>
    )
}


export default withRouter(FormSignup);