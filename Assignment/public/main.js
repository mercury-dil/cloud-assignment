import { db } from '../firebaseConfig.js';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyB8dnetWcv4_Ttr7uc1pSSi5bwXfNKnNqQ",
    authDomain: "cloud-computing-summative.firebaseapp.com",
    projectId: "cloud-computing-summative",
    storageBucket: "cloud-computing-summative.appspot.com",
    messagingSenderId: "294286313564",
    appId: "1:294286313564:web:7fd43523d11adf09587e99",
    measurementId: "G-Q0QMR9H0N8",
  
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://cloud-computing-summative.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);



async function testFirebaseConnection() {
    const testDocRef = doc(db, 'test', 'connection');
    await setDoc(testDocRef, { connected: true });
    const docSnap = await getDoc(testDocRef);
    if (docSnap.exists()) {
        document.getElementById('status').textContent = 'Firebase connection successful!';
        console.log('Document data: ', docSnap.data());
    } else {
        document.getElementById('status').textContent = 'No such document!';
        console.log('No such document!')
    }
}

testFirebaseConnection().catch((error) => {
    document.getElementById('status').textContent = 'Error connecting to Firebase';
    console.error('Error:', error);
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const dob = form.dob.value;


    
    });
});
