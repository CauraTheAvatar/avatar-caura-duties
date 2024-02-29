import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyA7NehIWb_NrpDpv79LAT7cazcFwObOAb8",
  authDomain: "avatar-caura-todo.firebaseapp.com",
  projectId: "avatar-caura-todo",
  storageBucket: "avatar-caura-todo.appspot.com",
  messagingSenderId: "1048400757701",
  appId: "1:1048400757701:web:c4264ff792cc63fa5f41ac",
  measurementId: "G-188D9MTQZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
