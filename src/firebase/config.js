import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjbfK8KvHscYvlJT2vs_RdsG5VHf16uBw",
  authDomain: "myapp-6be0c.firebaseapp.com",
  projectId: "myapp-6be0c",
  storageBucket: "myapp-6be0c.appspot.com",
  messagingSenderId: "194945113548",
  appId: "1:194945113548:web:e9604ee9022c47b7c35169",
  measurementId: "G-WW5YGTCK1Q"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);