import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBRWUA9Ts7vHKWFSL0Z5Hx-G_XZEyRdYk",
  authDomain: "mates-4c621.firebaseapp.com",
  projectId: "mates-4c621",
  storageBucket: "mates-4c621.appspot.com",
  messagingSenderId: "1038443628083",
  appId: "1:1038443628083:web:75f569aabd2c97c37a0546"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);