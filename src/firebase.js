import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfstm7vyqvLYM2AehKmtfiQNjKndsOdlY",
  authDomain: "chat-1cec9.firebaseapp.com",
  projectId: "chat-1cec9",
  storageBucket: "chat-1cec9.appspot.com",
  messagingSenderId: "189310522898",
  appId: "1:189310522898:web:dbd7e159d0b8f1defd2acb"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();