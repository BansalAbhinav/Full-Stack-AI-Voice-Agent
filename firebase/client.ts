// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw5dvlQf3mdm4g7YFHBv3Ob1ZEybRJViQ",
  authDomain: "prepwise-c0231.firebaseapp.com",
  projectId: "prepwise-c0231",
  storageBucket: "prepwise-c0231.appspot.com",
  messagingSenderId: "689443948705",
  appId: "1:689443948705:web:d606dfd44138ee900a88e0",
  measurementId: "G-V69ZL38QS1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
// npm install -g firebase-tools