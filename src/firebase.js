import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEHH1ufEmDxqmmSHQnjQj8w8-q0J0Ce8o",
  authDomain: "amzn-clone-bf1d3.firebaseapp.com",
  projectId: "amzn-clone-bf1d3",
  storageBucket: "amzn-clone-bf1d3.appspot.com",
  messagingSenderId: "684146593547",
  appId: "1:684146593547:web:c095612c1413bcff669c0e",
  measurementId: "G-H6HQ7SVE4M",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);