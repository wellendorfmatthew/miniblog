// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkx4wfy8iDHB0PuWjybgctogAZXF7zggc",
  authDomain: "blogproject-ab2c8.firebaseapp.com",
  projectId: "blogproject-ab2c8",
  storageBucket: "blogproject-ab2c8.appspot.com",
  messagingSenderId: "518661099836",
  appId: "1:518661099836:web:925c6645fc1a14232e0e39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);

export { firebase };