import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get, onValue, set, update } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
 apiKey: "AIzaSyARCnSBWkN_2xUFKGlmDBTWV_OIf1-P3pY",
    authDomain: "pulse-ae670.firebaseapp.com",
    databaseURL: "https://pulse-ae670-default-rtdb.firebaseio.com",
    projectId: "pulse-ae670",
    storageBucket: "pulse-ae670.firebasestorage.app",
    messagingSenderId: "353326683454",
    appId: "1:353326683454:web:34ed86590e53cf60a2c86f"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 👇 ГЛОБАЛЬНО ДЛЯ ВСЕХ СТРАНИЦ
window.firebaseDB = db;
window.firebaseRef = ref;
window.firebaseGet = get;
window.firebaseOnValue = onValue;
window.firebaseSet = set;
window.firebaseUpdate = update;
