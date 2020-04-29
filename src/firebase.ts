import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATB4XP3O1moNZH6GGibX9Nx4TdbBuhUn0",
  authDomain: "buddy-ionic.firebaseapp.com",
  databaseURL: "https://buddy-ionic.firebaseio.com",
  projectId: "buddy-ionic",
  storageBucket: "buddy-ionic.appspot.com",
  messagingSenderId: "646400846696",
  appId: "1:646400846696:web:87542975a3993cd2a2c4dd",
  measurementId: "G-D25603V3X0",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const fireBaseAuth = firebase.auth();
export const firebaseFirestore = firebase.firestore();

const googleprovider = new firebase.auth.GoogleAuthProvider();
export const singInWithGoogle = async () => {
  try {
    const result = await fireBaseAuth.signInWithPopup(googleprovider);
    return result;
  } catch (e) {
    return false;
  }
};
