// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import firebase from 'firebase/app'
//import 'firebase/storage'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
//import '@firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBflKoJQVRmQcHiOnxOwv0oNh6woz3wED0',
  authDomain: 'firegram-81b3a.firebaseapp.com',
  projectId: 'firegram-81b3a',
  storageBucket: 'firegram-81b3a.appspot.com',
  messagingSenderId: '464056606793',
  appId: '1:464056606793:web:1f991e8e3b8fe5ddc59f98',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
//firebase.initializeApp(firebaseConfig)

const projectStorage = getStorage(app)
const projectFirestore = getFirestore()
const timestamp = serverTimestamp()

export { projectFirestore, projectStorage, timestamp }
