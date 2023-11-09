// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC80ttAa72a8xZ7jrwcj9E2_3QpYN5Y0vE",
  authDomain: "brewery-6418f.firebaseapp.com",
  projectId: "brewery-6418f",
  storageBucket: "brewery-6418f.appspot.com",
  messagingSenderId: "341415674665",
  appId: "1:341415674665:web:fa38887a53aabd2b1aad38",
  measurementId: "G-644Z7K3XY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);