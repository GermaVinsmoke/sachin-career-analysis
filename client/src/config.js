import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAkV64V_kugh_a1bch5x9WF1TDop8sNorM',
  authDomain: 'sachin-career-analysis-714d9.firebaseapp.com',
  databaseURL: 'https://sachin-career-analysis-714d9.firebaseio.com',
  projectId: 'sachin-career-analysis-714d9',
  storageBucket: 'sachin-career-analysis-714d9.appspot.com',
  messagingSenderId: '646281711169',
  appId: '1:646281711169:web:338dae0da6742632a000c0'
};

firebase.initializeApp(config);

const fs = firebase.firestore();

export { fs };
