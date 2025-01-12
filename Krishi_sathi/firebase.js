// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7LsFOaPjmfoIdgvcFiDWe4ITwGaF0MSo",
  authDomain: "krishsathi-ccd35.firebaseapp.com",
  projectId: "krishsathi-ccd35",
  storageBucket: "krishsathi-ccd35.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:343966252169:android:751bcb3324c1fb243dda58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
