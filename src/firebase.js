import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDb4izXYfeB9y4U8QGvS_q5nKcFL7ox1uQ",
	authDomain: "e-commerce-demo-d5fb4.firebaseapp.com",
	projectId: "e-commerce-demo-d5fb4",
	storageBucket: "e-commerce-demo-d5fb4.appspot.com",
	messagingSenderId: "813924690551",
	appId: "1:813924690551:web:42a2de569942e8a64a7472",
	measurementId: "G-Z6F210ZRZ0"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };