import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyDSbUkci7isfpBPgsf5VRhAW-t5ZRFCIEI",
   authDomain: "goal-coach-b789d.firebaseapp.com",
   databaseURL: "https://goal-coach-b789d.firebaseio.com",
   projectId: "goal-coach-b789d",
   storageBucket: "goal-coach-b789d.appspot.com",
   messagingSenderId: "961250086666"
 };

 export const firebaseApp = firebase.initializeApp(config);
