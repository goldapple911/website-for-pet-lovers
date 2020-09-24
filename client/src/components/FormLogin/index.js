import React, { useState, useContext } from "react";
import { Redirect } from 'react-router';
import app from '../../utils/firebase';
import { AuthContext } from '../../utils/AuthContext'

function FormLogin({ toggleForm, history }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Function to login user via firebase.
    const handleLogin = async event => {
        event.preventDefault();
        try {
            await app
            .auth()
            .signInWithEmailAndPassword(formData.email, formData.password);
            // history.push('/User-Page');
        } 
        catch (error) {
            console.log('Login Form Error: ', error);
        }
    };

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/User-Page' />;
    }

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
                    onClick={handleLogin}
                >Submit</button>
                <p className="lead signup-login-txt">Need an account? <button className="text-button" type="button" onClick={toggleForm}>
                    Signup Here
                    </button>
                </p>
            </form>
            <div className="row-overlay"></div>
        </div>
    )
}


export default FormLogin;