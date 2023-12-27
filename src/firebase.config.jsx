// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAupuOrdmaf1LHA7CH15-uYBsCVhjamaU8",
  authDomain: "blogproject-1267e.firebaseapp.com",
  projectId: "blogproject-1267e",
  storageBucket: "blogproject-1267e.appspot.com",
  messagingSenderId: "1081518330241",
  appId: "1:1081518330241:web:ac74bcff8b1cf6e3d85880",
  measurementId: "G-GFLSRSRHGG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
