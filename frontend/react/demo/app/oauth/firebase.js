import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDAwdqU-4k5Azb1fNF9RFLAlT-RaMSDUPo",
  authDomain: "appelent-bc868.firebaseapp.com",
  projectId: "appelent-bc868",
  storageBucket: "appelent-bc868.appspot.com",
  messagingSenderId: "726562505952",
  appId: "1:726562505952:web:d05c0d37da55129551fc85",
  measurementId: "G-SCBJ5EM94B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
