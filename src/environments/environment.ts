// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCn2MEtxZiwGpBC7RilTw00ErJaVJzVy78",
    authDomain: "angular-mentoring-7165f.firebaseapp.com",
    projectId: "angular-mentoring-7165f",
    storageBucket: "angular-mentoring-7165f.appspot.com",
    messagingSenderId: "692371142202",
    appId: "1:692371142202:web:85eb8adb2f9b7121d3e703",
    measurementId: "G-3FNWE3RN2H"
  }
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);