import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHkV8IKcb2Amkh4Y2Sn6h7AQSZeFozbXU",
    authDomain: "react-17c31.firebaseapp.com",
    projectId: "react-17c31",
    storageBucket: "react-17c31.appspot.com",
    messagingSenderId: "1079258445003",
    appId: "1:1079258445003:web:a6fe765ef1ae1c7dd1974e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);