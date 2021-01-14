import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAEA_dRga1p_KiH3xddthpjBu_g8ICZ_T0",
  authDomain: "e-commerce-598d2.firebaseapp.com",
  projectId: "e-commerce-598d2",
  storageBucket: "e-commerce-598d2.appspot.com",
  messagingSenderId: "324161750378",
  appId: "1:324161750378:web:bf98ac99029a804bc15113",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
