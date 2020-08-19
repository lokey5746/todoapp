import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCHtxINQtTpyzlmrGTCRw1JkuqIRvnC0h8",
  authDomain: "todoapp-react-b7fce.firebaseapp.com",
  databaseURL: "https://todoapp-react-b7fce.firebaseio.com",
  projectId: "todoapp-react-b7fce",
  storageBucket: "todoapp-react-b7fce.appspot.com",
  messagingSenderId: "411955880254",
  appId: "1:411955880254:web:19de827e8f9734f5eb8c6f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
