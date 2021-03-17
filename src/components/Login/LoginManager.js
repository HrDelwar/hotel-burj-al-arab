import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const provider = new firebase.auth.GoogleAuthProvider();
export const handleGoogleSignInFirebase = () => {
    return firebase.auth()
        .signInWithPopup(provider)
        .then(result => result.user)
        .catch(error => error.message)
}