import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// Configuration for firebase
var config = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "atlas-pet-website.firebaseapp.com",
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: "atlas-pet-website",
  storageBucket: "atlas-pet-website.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGEID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID
};
firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
