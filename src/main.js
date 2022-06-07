import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import de mitt
import mitt from 'mitt';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCK4PpGx8RcAnFgaibh7AgkiA5HvUTdQYQ",
    authDomain: "kidsart-projet-s2.firebaseapp.com",
    projectId: "kidsart-projet-s2",
    storageBucket: "kidsart-projet-s2.appspot.com",
    messagingSenderId: "984383588019",
    appId: "1:984383588019:web:dbe5e78250673f20db52c6"
};


// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

// Création d'un emetteur mitt exportable
export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')





