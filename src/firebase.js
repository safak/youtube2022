import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-5a2cf.firebaseapp.com",
  projectId: "tutorial-5a2cf",
  storageBucket: "tutorial-5a2cf.appspot.com",
  messagingSenderId: "585126334212",
  appId: "1:585126334212:web:8539eafc56885e1b4c4a51"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
