import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBcnmOO9eq8vyDYpm8xXKa5HZA_gON4I2E",
  authDomain: "final-pro-56f9a.firebaseapp.com",
  projectId: "final-pro-56f9a",
  storageBucket: "final-pro-56f9a.appspot.com",
  messagingSenderId: "1088487928891",
  appId: "1:1088487928891:web:5330ad88001139d331d81e",
  measurementId: "G-LTNL2QLQPJ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }