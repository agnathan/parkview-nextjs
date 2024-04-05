// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

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
const app = initializeApp(firebaseConfig)
let analytics

if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app)
    } else {
      console.log('Firebase Analytics is not supported in this environment.')
    }
  })
}
export { app, analytics }
