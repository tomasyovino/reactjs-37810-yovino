import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh8O7IQPcyH3NaCmfB0ailiuqhSqqJUc0",
  authDomain: "tomatito-reactjs-37810.firebaseapp.com",
  projectId: "tomatito-reactjs-37810",
  storageBucket: "tomatito-reactjs-37810.appspot.com",
  messagingSenderId: "346013647250",
  appId: "1:346013647250:web:6b11e82de1b75ae46f814b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;