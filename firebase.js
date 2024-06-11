import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiUFUl-50t2rXrOSSff491oRwfHfVyk74",
  authDomain: "healthcane.firebaseapp.com",
  projectId: "healthcane",
  storageBucket: "healthcane.appspot.com",
  messagingSenderId: "459740854347",
  appId: "1:459740854347:web:ca338be2a5765388f3b5ce",
  measurementId: "G-X5LBJW9SC9",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { storage, db, auth };
