import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDRvRtQv46qem_qG0YatCHrrlZBGs_T9Lo",
    authDomain: "night-out-roulette.firebaseapp.com",
    databaseURL: "https://night-out-roulette.firebaseio.com",
    projectId: "night-out-roulette",
    storageBucket: "night-out-roulette.appspot.com",
    messagingSenderId: "553207475690",
    appId: "1:553207475690:web:67adfdc69b3e06ee07d693",
    measurementId: "G-374R78PXD5"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database().ref();