// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtUuHgCfPM5Dld0IjyFW-Ny1H2S34fqaU",
  authDomain: "socialbird-de07c.firebaseapp.com",
  projectId: "socialbird-de07c",
  storageBucket: "socialbird-de07c.appspot.com",
  messagingSenderId: "228131002700",
  appId: "1:228131002700:web:d82a9c3563fab0ba38d7e9",
  measurementId: "G-8B50LX2E51"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
