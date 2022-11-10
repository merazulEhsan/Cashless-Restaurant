// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGEzyEqPbR2O7PSgNone4WK0jzAJOInvk",
  authDomain: "cashless-restaurant.firebaseapp.com",
  projectId: "cashless-restaurant",
  storageBucket: "cashless-restaurant.appspot.com",
  messagingSenderId: "90692870033",
  appId: "1:90692870033:web:b4946af22657f096ee0430",
  measurementId: "G-EH62H108B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;