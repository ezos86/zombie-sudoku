// Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/analytics';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: 'AIzaSyC_5Dfx0qcr7_J3lEAa34q8FSOTCCE9ckA',
    authDomain: 'spekit-d62fa.firebaseapp.com',
    databaseURL: 'https://spekit-d62fa-default-rtdb.firebaseio.com',
    projectId: 'spekit-d62fa',
    storageBucket: 'spekit-d62fa.appspot.com',
    messagingSenderId: '891245932051',
    appId: '1:891245932051:web:019c10d18df688f5bf19e6',
    measurementId: 'G-GRPP7LHKTZ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
