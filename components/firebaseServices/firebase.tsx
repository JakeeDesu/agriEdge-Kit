// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUPTubt9qx5Sq5uZ_ilX1Sy4vF1dE2p1E",
  authDomain: "fip-ins-form.firebaseapp.com",
  projectId: "fip-ins-form",
  storageBucket: "fip-ins-form.appspot.com",
  messagingSenderId: "1058551448834",
  appId: "1:1058551448834:web:b38b2746516ccb479dee1b",
  measurementId: "G-5ZKT0L6CF7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);