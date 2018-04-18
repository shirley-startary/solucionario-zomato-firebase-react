import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCBAsL62aNKJ8mjw0AtpxTMjM9Ftn3j1n0",
  authDomain: "tasty-food-2.firebaseapp.com",
  databaseURL: "https://tasty-food-2.firebaseio.com",
  projectId: "tasty-food-2",
  storageBucket: "",
  messagingSenderId: "542787608675"
};

export default firebase.initializeApp(config);
