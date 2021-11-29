import firebase from "firebase/compat/app";
import "firebase/auth";
import { getDatabase } from "firebase/database";
import "firebase/compat/auth"

const ak = "AIzaSyCH9q8IBxZ0Y5J82RJv_1Sc-CHqP5zj8wY";

console.log(ak === process.env.REACT_APP_API_KEY);

const fb = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
});

const auth = fb.auth();
const database = getDatabase(fb); 
export {fb, auth, database};  // export firebase, auth, and the database