import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCqqrLpjXBjNRLZzyESgoMrk8kDXctZv0M",
  authDomain: "skillus-e02f5.firebaseapp.com",
  projectId: "skillus-e02f5",
  storageBucket: "skillus-e02f5.appspot.com",
  messagingSenderId: "819828742535",
  appId: "1:819828742535:web:9a421e501b338712c85b22",
  measurementId: "G-THN02YWCEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;