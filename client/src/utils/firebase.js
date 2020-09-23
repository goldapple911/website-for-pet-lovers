import * as firebase from 'firebase';
import 'firebase/auth'

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
  const app = firebase.initializeApp(config);

  export default app