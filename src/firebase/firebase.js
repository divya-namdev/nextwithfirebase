// import * as firebase from 'firebase/app';
// import 'firebase/auth';

// import config from './config';

// function getFirebase(){
//     if (!firebase.apps.length) {
//         firebase.initializeApp(config);
//     }
//     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

//     return firebase;
// }

// export default getFirebase;

import { initializeApp, getApps,getApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBOl27O7hEqLWKTGtWrDXPbhs_CeQYl_lM",
    authDomain: "fir-withnext-aebca.firebaseapp.com",
    projectId: "fir-withnext-aebca",
    storageBucket: "fir-withnext-aebca.appspot.com",
    messagingSenderId: "458527913186",
    appId: "1:458527913186:web:12800bf2fc3ac28f79dabb"
};
  
const app = !getApps().length? initializeApp(firebaseConfig):getApp()
const getFirebase = getAuth(app)
export default getFirebase;