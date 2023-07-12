
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"; // Modify this line

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app); // Modify this line


import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUoakcz-oqvXUqPkt8LjcmHRzU4LJhxhs",
  authDomain: "smart-tech-store.firebaseapp.com",
  projectId: "smart-tech-store",
  storageBucket: "smart-tech-store.appspot.com",
  messagingSenderId: "525126862226",
  appId: "1:525126862226:web:8d16e2169dab4a8bbe2d4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}