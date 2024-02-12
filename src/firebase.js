// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCDGHA2s5uNfLZaUkUOuSWwDGynbmeSbUI",
  authDomain: "tutorial-react-admin-51220.firebaseapp.com",
  projectId: "tutorial-react-admin-51220",
  storageBucket: "tutorial-react-admin-51220.appspot.com",
  messagingSenderId: "395844745190",
  appId: "1:395844745190:web:cbe898b165702705840827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);