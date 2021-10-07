import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuYf8thBk8G9aOeopkcyoEXvQnWzAnXew",
    authDomain: "calendar-6a182.firebaseapp.com",
    projectId: "calendar-6a182",
    storageBucket: "calendar-6a182.appspot.com",
    messagingSenderId: "773779704408",
    appId: "1:773779704408:web:823d5c3eb765ddda99982d",
    measurementId: "G-EFVGYCSCZZ"
  };

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export {firestore};
