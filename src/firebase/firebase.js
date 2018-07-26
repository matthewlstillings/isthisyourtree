//allows us to connect to firebase  

import * as firebase from 'firebase'; //takes all of named exports from firebase nodes and dumps them on new "firebase" variable


//Intialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { storage, firebase, googleAuthProvider, database as default };
