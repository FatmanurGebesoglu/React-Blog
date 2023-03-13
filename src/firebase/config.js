import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA6FE41Ior2RdcXnFiFfEgmcXHrDSPt4BE",
    authDomain: "blog-26514.firebaseapp.com",
    projectId: "blog-26514",
    storageBucket: "blog-26514.appspot.com",
    messagingSenderId: "913800937786",
    appId: "1:913800937786:web:7ce3d99442078e7f199003"
  };
initializeApp(firebaseConfig);

const db=getFirestore();
export {db};
