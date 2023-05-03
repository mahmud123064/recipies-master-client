// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMHNLca6pPK42ZJzik_F3yA_1tHK_cqsI",
  authDomain: "the-recipies-master.firebaseapp.com",
  projectId: "the-recipies-master",
  storageBucket: "the-recipies-master.appspot.com",
  messagingSenderId: "759933786562",
  appId: "1:759933786562:web:ae9f46e6452d5a82295e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;