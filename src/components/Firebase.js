import { initializeApp } from "firebase/app";

//Con esto me traigo la funcion que me permite traer una referencia de la base de datos
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBRWUA9Ts7vHKWFSL0Z5Hx-G_XZEyRdYk",
  authDomain: "mates-4c621.firebaseapp.com",
  projectId: "mates-4c621",
  storageBucket: "mates-4c621.appspot.com",
  messagingSenderId: "1038443628083",
  appId: "1:1038443628083:web:75f569aabd2c97c37a0546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Obtenemos una referencia de la base de datos
export const db = getFirestore(app);