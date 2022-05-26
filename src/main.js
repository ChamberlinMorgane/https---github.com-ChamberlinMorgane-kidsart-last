import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj9AVn_ekzFp3Ac1HVYxrzgsJEtGGBgG0",
    authDomain: "mmi-1-firebase-vuejs3-1b15c.firebaseapp.com",
    projectId: "mmi-1-firebase-vuejs3-1b15c",
    storageBucket: "mmi-1-firebase-vuejs3-1b15c.appspot.com",
    messagingSenderId: "403550274215",
    appId: "1:403550274215:web:3eef3810e1c8c3c7981182"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')



