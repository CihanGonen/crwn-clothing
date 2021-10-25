import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCM_1tF4RTIjGyTq00hT9hFu9x6GX0adgo",
  authDomain: "crwn-db-efa35.firebaseapp.com",
  projectId: "crwn-db-efa35",
  storageBucket: "crwn-db-efa35.appspot.com",
  messagingSenderId: "681028571427",
  appId: "1:681028571427:web:5aef6b3cee053edababc96",
  measurementId: "G-TVPVTS592H"
};

initializeApp(config);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
};