import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAPeqVtTajurXpT4smbUkIQAR8GA0eJFYQ',
  authDomain: 'test-basic-mining.firebaseapp.com',
  projectId: 'test-basic-mining',
  storageBucket: 'test-basic-mining.appspot.com',
  messagingSenderId: '31362404394',
  appId: '1:31362404394:web:1d23e06847717306573353'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export default firebaseApp
