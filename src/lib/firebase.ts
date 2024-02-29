import firebase from 'firebase/app';
import 'firebase/firestore'; // Import any Firebase services you plan to use
import React from 'react';
import App from '../App';

const firebaseConfig = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "<YOUR_AUTH_DOMAIN>",
  projectId: "<YOUR_PROJECT_ID>",
  storageBucket: "<YOUR_STORAGE_BUCKET>",
  messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
  appId: "<YOUR_APP_ID>",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
