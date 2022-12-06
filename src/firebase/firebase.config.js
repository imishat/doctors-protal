// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4y-bFudoBVHL1GTG8Eo6OgEs3X3rXGAI",
  authDomain: "doctors-protal-cceef.firebaseapp.com",
  projectId: "doctors-protal-cceef",
  storageBucket: "doctors-protal-cceef.appspot.com",
  messagingSenderId: "196042768698",
  appId: "1:196042768698:web:0243368600270ee7a41003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default(app)