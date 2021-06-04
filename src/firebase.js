import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBi-JVtLI7QLQCOKS5T9qMm4KeZyrghfIE",
    authDomain: "instagram-clone-ec2a0.firebaseapp.com",
    projectId: "instagram-clone-ec2a0",
    storageBucket: "instagram-clone-ec2a0.appspot.com",
    messagingSenderId: "784488083533",
    appId: "1:784488083533:web:ee4ba2fd85917c936cac04",
    measurementId: "G-VD9B8KM0PZ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };