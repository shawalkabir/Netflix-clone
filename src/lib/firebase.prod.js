import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//we need to somehow seed the database

//we need a config

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
