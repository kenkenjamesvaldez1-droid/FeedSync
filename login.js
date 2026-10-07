// login.js
import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // 1️⃣ Login user
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 2️⃣ Get the user's role from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (userDoc.exists()) {
      const userData = userDoc.data();
      const role = userData.role;

      console.log("Logged in as:", role); // For testing

      // 3️⃣ Redirect based on role
      if (role === "student") {
        window.location.href = "student-dashboard.html";
      } else if (role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else if (role === "guest") {
        window.location.href = "guest-dashboard.html";
      } else {
        alert("No role assigned. Please contact admin.");
      }

    } else {
      alert("User data not found!");
    }

  } catch (error) {
    alert("Error: " + error.message);
  }
});
