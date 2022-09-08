import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCUiTTIr5jaApiTMbJ61eR1ruKT7M8AmH8",
    authDomain: "chat-app-233d3.firebaseapp.com",
    projectId: "chat-app-233d3",
    storageBucket: "chat-app-233d3.appspot.com",
    messagingSenderId: "457913529657",
    appId: "1:457913529657:web:ca71f7755f391aaf7864e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();