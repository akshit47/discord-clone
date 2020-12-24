import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJvMHHNLtPVVFcolDGVLgV80xyQAtpA2M",
    authDomain: "discord-clone-52b9d.firebaseapp.com",
    projectId: "discord-clone-52b9d",
    storageBucket: "discord-clone-52b9d.appspot.com",
    messagingSenderId: "782835012586",
    appId: "1:782835012586:web:23e72a459dd85ecb3fd893"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;