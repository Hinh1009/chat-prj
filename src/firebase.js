// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA_Oo9HtuGzz3xHt9Sh2nksPGqIy5BE96o",
    authDomain: "chat-prj-38f20.firebaseapp.com",
    databaseURL: "https://chat-prj-38f20-default-rtdb.firebaseio.com",
    projectId: "chat-prj-38f20",
    storageBucket: "chat-prj-38f20.appspot.com",
    messagingSenderId: "852957975647",
    appId: "1:852957975647:web:03a14918921cd57542b7ea",
    measurementId: "G-Y44DB11SX5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  
  export {auth,provider}
  export default db
