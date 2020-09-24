import * as firebase from 'firebase/app';
import 'firebase/auth';

// Configuration for firebase
// NEED NEW HIDDEN KEYS BEFORE GOING TO PRODUCTION
var config = {
    apiKey: "AIzaSyDlc-CVOpp40hIzNOWexDTACq2C_w-qrbw",
    authDomain: "atlas-pet-website.firebaseapp.com",
    databaseURL: "https://atlas-pet-website.firebaseio.com",
    projectId: "atlas-pet-website",
    storageBucket: "atlas-pet-website.appspot.com",
    messagingSenderId: "235788116248",
    appId: "1:235788116248:web:5d757793fc83da82a87e6d",
    measurementId: "G-XQ1B3FKZXT"
  };
  const app = firebase.initializeApp(config);

  export default app