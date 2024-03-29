import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAic9dslh0xFB2Fi8JL3KtvbO0SS-pj5AU",
  authDomain: "admin-78779.firebaseapp.com",
  projectId: "admin-78779",
  storageBucket: "admin-78779.appspot.com",
  messagingSenderId: "337459496835",
  appId: "1:337459496835:web:f9433912ea0892b58258b6",
  measurementId: "G-Z1FE96S6HR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);