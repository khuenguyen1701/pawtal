// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoLK2YQ0mQwl3JFq08tnn9dYTfkhV8bDg",
  authDomain: "pawtal.firebaseapp.com",
  projectId: "pawtal",
  storageBucket: "pawtal.firebasestorage.app",
  messagingSenderId: "1094366484018",
  appId: "1:1094366484018:web:246b3097be9c26e7a00e2b",
  measurementId: "G-B0SYQJG5Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export { auth }