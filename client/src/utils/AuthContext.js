import React, { useEffect, useState } from 'react';
import app from './firebase';

export const AuthContext = React.createContext();

// Set state to store authentication status
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // Sets up to listen for changes to our firebase object
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};