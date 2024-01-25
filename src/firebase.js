import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB2haaz0PJjffgwy8UPTxVZmCcz8dITPxs",
  authDomain: "blogging-e5f2c.firebaseapp.com",
  projectId: "blogging-e5f2c",
  storageBucket: "blogging-e5f2c.appspot.com",
  messagingSenderId: "31893015707",
  appId: "1:31893015707:web:c78ef6c3e53e3bf58e0a3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();