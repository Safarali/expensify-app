import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBf9W47Vl62PU6-6aDbpPr-mK2PFdpF3gI",
    authDomain: "expensifywebapp-fca38.firebaseapp.com",
    databaseURL: "https://expensifywebapp-fca38.firebaseio.com",
    projectId: "expensifywebapp-fca38",
    storageBucket: "expensifywebapp-fca38.appspot.com",
    messagingSenderId: "507969744704"
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };
