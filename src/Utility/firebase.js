import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5iHyILnjGKbMfq-xOgyAXueiYynMo5-M",
  authDomain: "clone-6afb7.firebaseapp.com",
  projectId: "clone-6afb7",
  storageBucket: "clone-6afb7.firebasestorage.app",
  messagingSenderId: "145080972786",
  appId: "1:145080972786:web:fe7fc0137a087e808b276b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
