// Firebase initialization for RedForge / app-scanner.
// NOTE: the web config values below are PUBLIC by design — Firebase client config
// is not a secret. Real security is enforced by Firebase Auth + Firestore Security
// Rules (see firestore.rules), never by hiding these values. Env vars override the
// defaults so the same code runs in any environment.
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "AIzaSyB5F2ApiXNHikeuZn95Tm9uyiE6ScfxFSU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? "app-scanner-55f42.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "app-scanner-55f42",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? "app-scanner-55f42.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "833929639188",
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? "1:833929639188:web:4b4598619e3047565bbe01",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ?? "G-FVJ8RD82JD",
};

// Avoid re-initializing during Vite HMR.
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
// Request the user's email so we can attribute authorization records to a person.
githubProvider.addScope("read:user");
githubProvider.addScope("user:email");
