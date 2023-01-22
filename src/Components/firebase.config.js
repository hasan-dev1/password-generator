// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQWUCXvgl2tezrXuotTSC-bp4tTPGCO2M",
  authDomain: "password-generator-ba93d.firebaseapp.com",
  projectId: "password-generator-ba93d",
  storageBucket: "password-generator-ba93d.appspot.com",
  messagingSenderId: "1034688161699",
  appId: "1:1034688161699:web:76c3ed16b3f935b4c59c16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;