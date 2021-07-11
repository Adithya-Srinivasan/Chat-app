import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCGY5LAAu9Qy52e6ExcQVmD0R4ZCsYbtak",
    authDomain: "chat-app-8ff32.firebaseapp.com",
    projectId: "chat-app-8ff32",
    storageBucket: "chat-app-8ff32.appspot.com",
    messagingSenderId: "165419348164",
    appId: "1:165419348164:web:da1ec0ab7b9b8521329991",
    measurementId: "G-HQSDHEQPT2"
  }).auth();