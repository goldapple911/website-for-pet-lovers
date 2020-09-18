import React, { useState } from "react";
import axios from "axios";


function FormLogin({ toggleForm }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function handleEmailChange(e) {
        setFormData({ ...formData, email: e.target.value })
    };

    function handlePasswordChange(e) {
        setFormData({ ...formData, password: e.target.value })
    };

    return (
        <div className="jumbotron form-spacing">
            <form className="form">
                <h1 className="display-4 main-txt signup-login"><strong>Login</strong></h1>

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

                {/* Submit button */}
                <button
                    className="submit-btn btn-submit"
                    type="submit"
                    // onClick={sendEmail}
                >Submit</button>
                <p className="lead signup-login-txt">Already have an account? <button className="text-button" onClick={toggleForm}>
                        Login Here
                    </button>
                </p>
            </form>
            <div className="row-overlay"></div>
        </div>
    )
}


export default FormLogin;