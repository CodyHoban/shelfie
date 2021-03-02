import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyC4f95sl-r2p_PXvTVYF2ctw_QZqq62Yw4",
    authDomain: "shelfie-d5890.firebaseapp.com",
    databaseURL: "https://shelfie-d5890.firebaseio.com",
    projectId: "shelfie-d5890",
    storageBucket: "shelfie-d5890.appspot.com",
    messagingSenderId: "829507158892",
    appId: "1:829507158892:web:35593cf54c9e3c0ce16949",
    measurementId: "G-KJ10PVMR83"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }
var db = firebase.firestore();
export default db;