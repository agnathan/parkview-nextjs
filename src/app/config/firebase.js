// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDAIZzAGszVy9m5gLQT-Ud5BTydsVMHWhc',
  authDomain: 'parkview-website.firebaseapp.com',
  projectId: 'parkview-website',
  storageBucket: 'parkview-website.appspot.com',
  messagingSenderId: '252574190900',
  appId: '1:252574190900:web:82b9d2ca7c44f85b406961',
  measurementId: 'G-W8R9YJBGTE'
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// Firestore exports
export const firestore = firebase.firestore()
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp
export const fbTimestamp = firebase.firestore.Timestamp
export const fromMillis = firebase.firestore.Timestamp.fromMillis
export const increment = firebase.firestore.FieldValue.increment

export const analytics = () => {
  if (typeof window !== 'undefined') {
    return firebase.analytics()
  } else {
    return null
  }
}
export default firebase
