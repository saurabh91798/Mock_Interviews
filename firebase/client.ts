// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp9Ov7AlqVblqLE3mTebLjMiDyRO6fQC8",
  authDomain: "prepwise-4917c.firebaseapp.com",
  projectId: "prepwise-4917c",
  storageBucket: "prepwise-4917c.firebasestorage.app",
  messagingSenderId: "853387948767",
  appId: "1:853387948767:web:72bd7e0486fdbe0edfaf6a",
  measurementId: "G-YHB1D9CH1D"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);