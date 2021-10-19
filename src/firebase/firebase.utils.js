import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {
    apiKey: "AIzaSyA4_uV-qJnbhhA3onppdF8617No1ieDFLA",
    authDomain: "ecom-db-33dbe.firebaseapp.com",
    projectId: "ecom-db-33dbe",
    storageBucket: "ecom-db-33dbe.appspot.com",
    messagingSenderId: "362185503979",
    appId: "1:362185503979:web:f6687d99375d087c723aae"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;