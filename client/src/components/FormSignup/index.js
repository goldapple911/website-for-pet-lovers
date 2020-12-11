import React, { useState } from "react";
import { withRouter } from 'react-router';
import fbApp from '../../utils/firebase';
import "./formSignup.css";

function FormSignup({ toggleForm, history }) {

    // const firestore = fbApp.firestore();
    // const auth = fbApp.auth();

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        phone: "",
        password: "",
        retypePassword: ""
    });

    // Function to sign up user via firebase.
    const handleSignUp =
        async event => {
            const { password, retypePassword, email } = formData
            if (password !== retypePassword || email === "") {

            }

            event.preventDefault();
            try {
                await fbApp
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

    function handlePhoneChange(e) {
        console.log(formData)
        setFormData({ ...formData, phone: e.target.value })
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

                {/* Email input */}
                <label htmlFor="email">Email</label>
                <input
                    className="inputs"
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleEmailChange}
                    required
                ></input>

                {/* Password input */}
                <div className="position-relative">
                    <label htmlFor="password">Password</label>
                    <label className={formData.password.length < 8 && formData.password.length > 0 ? "no-match" : "d-none"} htmlFor="password">Must be at least 8 characters!</label>
                </div>
                <input
                    className="inputs"
                    type="password"
                    id="password"
                    name="password"
                    onChange={handlePasswordChange}
                    required
                ></input>

                {/* Password Confirmation input */}
                <div className="position-relative">
                    <label htmlFor="password">Retype Password</label>
                    <label className={formData.password !== formData.retypePassword && formData.retypePassword.length > 0 ? "no-match" : "d-none"} htmlFor="password">Passwords must match!</label>
                </div>
                <input
                    className="inputs"
                    type="password"
                    id="retype-password"
                    name="retype-password"
                    onChange={handleRetypePasswordChange}
                    required
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