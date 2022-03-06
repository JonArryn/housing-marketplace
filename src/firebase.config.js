// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw9p55YYNErCUmTBGGDJxmx5-GqzSqOFA",
  authDomain: "house-marketplace-app-499ef.firebaseapp.com",
  projectId: "house-marketplace-app-499ef",
  storageBucket: "house-marketplace-app-499ef.appspot.com",
  messagingSenderId: "385257589273",
  appId: "1:385257589273:web:f8523df5126f6cb8c97888",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
