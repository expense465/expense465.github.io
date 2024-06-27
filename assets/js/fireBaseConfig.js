// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";


// const firebaseConfig = {
//     apiKey: "AIzaSyANYk0LlxsQwGTaw-u4y9EzALsGLjFXPcE",
//     authDomain: "expensetrackerv1-690e6.firebaseapp.com",
//     projectId: "expensetrackerv1-690e6",
//     storageBucket: "expensetrackerv1-690e6.appspot.com",
//     messagingSenderId: "674219928023",
//     appId: "1:674219928023:web:724532785517ad65758392",
//     measurementId: "G-DH4X850KP0",
//     databaseURL: "https://expensetrackerv1-690e6-default-rtdb.firebaseio.com/"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCeHlUS_cKlWaViWqlI5RwfP3AnCsvFM4A",
    authDomain: "expenseprod-4fcda.firebaseapp.com",
    projectId: "expenseprod-4fcda",
    storageBucket: "expenseprod-4fcda.appspot.com",
    messagingSenderId: "870938825421",
    appId: "1:870938825421:web:732f174c1de942ea4e4f84",
    measurementId: "G-6XSL2QWWZK"
  };
  

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
