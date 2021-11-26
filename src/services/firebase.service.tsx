// Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/database';
import 'firebase/analytics';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: 'AIzaSyC-g2Yque1Pk_d17IkUbxYM2wr2RChVD9Y',
    authDomain: 'creatormade-prod.firebaseapp.com',
    databaseURL: 'https://creatormade-prod-default-rtdb.firebaseio.com',
    projectId: 'creatormade-prod',
    storageBucket: 'creatormade-prod.appspot.com',
    messagingSenderId: '545090712374',
    appId: '1:545090712374:web:0cd3cf323e9acfce48f997',
    measurementId: 'G-RD623X3ZF1',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
