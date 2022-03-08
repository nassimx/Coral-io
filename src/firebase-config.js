// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCzeh50YW43D1BEYNMh2xrcXbWx888m7GA',
  authDomain: 'coral-io.firebaseapp.com',
  projectId: 'coral-io',
  storageBucket: 'coral-io.appspot.com',
  messagingSenderId: '358723052213',
  appId: '1:358723052213:web:ae802f349bee970fb2d4fc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);

export default app;
