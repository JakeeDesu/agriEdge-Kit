// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBipETd1n4JFktJP0QfD7sdG6CuqblxQmk",
  authDomain: "ag-kit-f4eee.firebaseapp.com",
  projectId: "ag-kit-f4eee",
  storageBucket: "ag-kit-f4eee.appspot.com",
  messagingSenderId: "80481771088",
  appId: "1:80481771088:web:173f3598627d7634457b55",
  measurementId: "G-KCR9PQDMPR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);