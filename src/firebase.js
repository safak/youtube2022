import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // AIzaSyBW7rKhDaOpks-OsQVY3OTqSp-MYYMi_fU
  apiKey: "AIzaSyD0wFe0nsT5mJJB3Zu9JXoQV72P0Ta3Azo",
  authDomain: "metube-c99fe.firebaseapp.com",
  projectId: "metube-c99fe",
  storageBucket: "metube-c99fe.appspot.com",
  messagingSenderId: "477537481904",
  appId: "1:477537481904:web:45fa392cd6796fc2f63775",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
