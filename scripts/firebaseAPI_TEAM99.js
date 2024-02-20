//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyA5z4866es6NFHgwJwaipTcQtOq4dRRBUM",
    authDomain: "comp1800-202410-demo-400b2.firebaseapp.com",
    projectId: "comp1800-202410-demo-400b2",
    storageBucket: "comp1800-202410-demo-400b2.appspot.com",
    messagingSenderId: "544754777404",
    appId: "1:544754777404:web:f9fc8a3839fcef7a59f239"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
