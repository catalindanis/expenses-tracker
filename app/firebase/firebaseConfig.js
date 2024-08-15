// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKwpg7mqIaN_NC5MSChdjUMYJQ1Sstssk",
  authDomain: "expenses-tracker-ea44b.firebaseapp.com",
  databaseURL:
    "https://expenses-tracker-ea44b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expenses-tracker-ea44b",
  storageBucket: "expenses-tracker-ea44b.appspot.com",
  messagingSenderId: "68114784389",
  appId: "1:68114784389:web:4fdf4957d4e4b6170089ec",
  measurementId: "G-9EPM8V0HNJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();

export { db };
