import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyCa6SjwtBlCrLdfIwDMA-sAVsKQcA81Fn8",
//     authDomain: "brusi-propiedades-db-24505.firebaseapp.com",
//     databaseURL: "https://brusi-propiedades-db-24505-default-rtdb.firebaseio.com",
//     projectId: "brusi-propiedades-db-24505",
//     storageBucket: "brusi-propiedades-db-24505.appspot.com",
//     messagingSenderId: "942930033503",
//     appId: "1:942930033503:web:dcb527aa9a28ba768554ea",
//     measurementId: "G-YKG4ZRYWM9"
// };

// Base de datos de prueba
const firebaseConfig = {
    apiKey: "AIzaSyBjnhVsbOiUSC4bkPLqr-vL17hEVaz2oio",
    authDomain: "brusi-propiedades-db.firebaseapp.com",
    projectId: "brusi-propiedades-db",
    storageBucket: "brusi-propiedades-db.appspot.com",
    messagingSenderId: "895788508150",
    appId: "1:895788508150:web:2fbbbf02db7bce21f5ddd7",
    measurementId: "G-PQ9JZL68K7"
}
  
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const db = getFirestore(app);