// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5BiwZHcy_s47anCT1384XmV00LbbijBI",
  authDomain: "feedsync-6dcda.firebaseapp.com",
  projectId: "feedsync-6dcda",
  storageBucket: "feedsync-6dcda.appspot.com",
  messagingSenderId: "290005568489",
  appId: "1:290005568489:web:aeb19e3bf6a4153b38d978"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
