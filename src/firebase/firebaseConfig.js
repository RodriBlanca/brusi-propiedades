import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCa6SjwtBlCrLdfIwDMA-sAVsKQcA81Fn8",
    authDomain: "brusi-propiedades-db-24505.firebaseapp.com",
    databaseURL: "https://brusi-propiedades-db-24505-default-rtdb.firebaseio.com",
    projectId: "brusi-propiedades-db-24505",
    storageBucket: "brusi-propiedades-db-24505.appspot.com",
    messagingSenderId: "942930033503",
    appId: "1:942930033503:web:dcb527aa9a28ba768554ea",
    measurementId: "G-YKG4ZRYWM9"
}
  
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const db = getFirestore(app);