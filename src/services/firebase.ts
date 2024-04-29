// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyCvy1pKSyNVwlhC8X77DL0ixRopDdLGORg",
  authDomain: "testingi-6df1c.firebaseapp.com",
  projectId: "testingi-6df1c",
  storageBucket: "testingi-6df1c.appspot.com",
  messagingSenderId: "551702951952",
  appId: "1:551702951952:web:5c79fbed477f4eebc9f295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
