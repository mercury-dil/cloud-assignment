//import { db } from 'firebaseConfig.js';
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
// import { initializeApp } from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyB8dnetWcv4_Ttr7uc1pSSi5bwXfNKnNqQ",
    authDomain: "cloud-computing-summative.firebaseapp.com",
    projectId: "cloud-computing-summative",
    storageBucket: "cloud-computing-summative.appspot.com",
    messagingSenderId: "294286313564",
    appId: "1:294286313564:web:7fd43523d11adf09587e99",
    measurementId: "G-Q0QMR9H0N8",
  
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://cloud-computing-summative-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


document.addEventListener('DOMContentLoaded', (event) => {
    const form1 = document.getElementById('myForm');
    const form2 = document.getElementById('myForm2');

    form1.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = form1.name.value;
        const email = form1.email.value;
        const dob = form1.dob.value;
        console.log('Submitted Successfully.');
        console.log('Walker\'sName: ', name);
        console.log('Email: ', email);
        console.log('Date of Birth: ', dob);
        set(ref(database, 'walkers/' + name), {
            name: name,
            email: email,
            dob: dob
        })
        .then(() => {
            console.log("Data saved successfully");
            alert("Form submitted");
        })
        .catch((error) => {
            console.error("Error saving data");
            alert("Error submitting.");
        });
    });

    form2.addEventListener('submit', function(event) {
        event.preventDefault();
        const dogname = form2.dogname.value;
        const breed = form2.breed.value;
        const dogdob = form2.dogdob.value;
        console.log('Submitted Successfully.');
        console.log("Dog's Name: ", dogname);
        console.log("Dog Breed: ", breed);
        console.log("Dog's Date of Birth: ", dogdob);
        set(ref(database, 'dogs/' + dogname), {
            dogname: dogname,
            breed: breed,
            dogdob: dogdob
        })
        .then(() => {
            console.log("Data saved successfully");
            alert("Form submitted");
        })
        .catch((error) => {
            console.error("Error saving data");
            alert("Error submitting")
        });
    });

});