
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDBBEJ4pEyHexcotVZa_S0q4i7u3IA6ttw",
    authDomain: "reactjs-7cc53.firebaseapp.com",
    projectId: "reactjs-7cc53",
    storageBucket: "reactjs-7cc53.appspot.com",
    messagingSenderId: "547633925583",
    appId: "1:547633925583:web:c28d982e5477590a3a56ba",
    measurementId: "G-N33M8W0KLK"
};

const app = initializeApp(firebaseConfig);

export const firebaseConnect = () => app



