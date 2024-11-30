import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAL1jdT8vG0sjbhPUxK22tGgw_vcH5X_Kk",
    authDomain: "sharath-accessories.firebaseapp.com",
    projectId: "sharath-accessories",
    storageBucket: "sharath-accessories.firebasestorage.app",
    messagingSenderId: "791597098698",
    appId: "1:791597098698:web:de6a5c2cc8b972dd5c3633"
  };

const app = initializeApp(firebaseConfig);

// Initialize Firestore and Authentication
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export the db and auth instances for use in your app
export { db, auth, googleProvider };