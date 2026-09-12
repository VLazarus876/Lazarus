import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./firebase-config.js";

const signInButton = document.querySelector("#google-sign-in");
const signOutButton = document.querySelector("#google-sign-out");
const authStatus = document.querySelector("#auth-status");
const provider = new GoogleAuthProvider();

const setStatus = (message) => {
  if (authStatus) authStatus.textContent = message;
};

signInButton?.addEventListener("click", async () => {
  setStatus("Signing in…");

  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Google sign-in failed", error);
    setStatus("Sign-in unavailable");
  }
});

signOutButton?.addEventListener("click", async () => {
  await signOut(auth);
});

onAuthStateChanged(auth, (user) => {
  const signedIn = Boolean(user);

  if (signInButton) signInButton.hidden = signedIn;
  if (signOutButton) signOutButton.hidden = !signedIn;
  setStatus(signedIn ? `Signed in as ${user.displayName || user.email}` : "");
});
