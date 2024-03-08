// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFh_4GHahygsut_Kfgkoe1g9visVmuXBE",
  authDomain: "sample-project-18b05.firebaseapp.com",
  projectId: "sample-project-18b05",
  storageBucket: "sample-project-18b05.appspot.com",
  messagingSenderId: "1051502075881",
  appId: "1:1051502075881:web:c4608d85d2764280f27578",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
