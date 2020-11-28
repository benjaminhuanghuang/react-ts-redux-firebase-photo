import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyAd-WPhPfkcTWExmr3yON4uGaGfdI5tGxM",
  authDomain: "react-photo-gallery-b6ffd.firebaseapp.com",
  databaseURL: "https://react-photo-gallery-b6ffd.firebaseio.com",
  projectId: "react-photo-gallery-b6ffd",
  storageBucket: "react-photo-gallery-b6ffd.appspot.com",
  messagingSenderId: "1077698229163",
  appId: "1:1077698229163:web:d8690443395cd55fb098ee",
};


firebase.initializeApp(firebaseConfig)


export default firebase;