// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIhfXDrjEoH2BcoAFBbPoy98QzQ0E1W7o",
  authDomain: "furniture-tienda.firebaseapp.com",
  projectId: "furniture-tienda",
  storageBucket: "furniture-tienda.appspot.com",
  messagingSenderId: "1099325660455",
  appId: "1:1099325660455:web:87c55f6d0d84a6c5a39d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)