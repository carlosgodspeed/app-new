// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics  } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPPpOEjPlQHGuijvol9PpvD7lXTIRR7kg",
  authDomain: "project-2025-c2c37.firebaseapp.com",
  projectId: "project-2025-c2c37",
  storageBucket: "project-2025-c2c37.firebasestorage.app",
  messagingSenderId: "1003067941623",
  appId: "1:1003067941623:web:a3bd0ae50a5e07507029f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

export const db=getFirestore(app);

const analytics = getAnalytics(app);