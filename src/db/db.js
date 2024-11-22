
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFBnNZNKncxolInlrMDrVYyd549aGk0TE",
  authDomain: "ecommers-65115.firebaseapp.com",
  projectId: "ecommers-65115",
  storageBucket: "ecommers-65115.firebasestorage.app",
  messagingSenderId: "1066891646833",
  appId: "1:1066891646833:web:79f69de328744c0c6008d0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();  

export default db