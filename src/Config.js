



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjdcE8wBlmedThUO0FHdnlMRZSUs3SX2o",
  authDomain: "react-blogging-app-b8459.firebaseapp.com",
  projectId: "react-blogging-app-b8459",
  storageBucket: "react-blogging-app-b8459.firebasestorage.app",
  messagingSenderId: "723855516144",
  appId: "1:723855516144:web:02bda154b9f85bd699fd35",
  measurementId: "G-ZTJ8S3EC41"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export  const db = getFirestore(app);
