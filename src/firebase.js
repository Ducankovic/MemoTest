import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDKgJrIzI5KAKmA9nF5CH9dTgpTsnIRSCo",
  authDomain: "memotest-6f440.firebaseapp.com",
  databaseURL: "https://memotest-6f440.firebaseio.com",
  projectId: "memotest-6f440",
  storageBucket: "memotest-6f440.appspot.com",
  messagingSenderId: "286022783004",
  appId: "1:286022783004:web:56a1584ecf1eb9bfb10fd9",
};
// Initialize Firebse
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
