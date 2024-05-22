import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8dnetWcv4_Ttr7uc1pSSi5bwXfNKnNqQ",
    authDomain: "cloud-computing-summative.firebaseapp.com",
    projectId: "cloud-computing-summative",
    storageBucket: "cloud-computing-summative.appspot.com",
    messagingSenderId: "294286313564",
    appId: "1:294286313564:web:7fd43523d11adf09587e99",
    measurementId: "G-Q0QMR9H0N8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db } ;