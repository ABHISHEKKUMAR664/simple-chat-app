import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfCZT_IM_WqQH-OabjH6pqoQaV-oAsBww",
    authDomain: "firechat-b3cf5.firebaseapp.com",
    projectId: "firechat-b3cf5",
    storageBucket: "firechat-b3cf5.appspot.com",
    messagingSenderId: "1015251623368",
    appId: "1:1015251623368:web:0ad186d707d7dbec6cb4fd",
    measurementId: "G-7JHEMBNHP6"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }; 