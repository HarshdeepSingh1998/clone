/* eslint-disable no-console */
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js')
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js')

// const firebaseConfig = {
//   apiKey: 'AIzaSyAuMn5gIhXQ_TDBmXLDnlZd28Ot0yiT6bA',
//   authDomain: 'basic-mining.firebaseapp.com',
//   projectId: 'basic-mining',
//   storageBucket: 'basic-mining.appspot.com',
//   messagingSenderId: '661831590833',
//   appId: '1:661831590833:web:b6b0f3f26404d0346d1390'
//   // measurementId: 'your_keys'
// }
const firebaseConfig = {
  apiKey: 'AIzaSyAPeqVtTajurXpT4smbUkIQAR8GA0eJFYQ',
  authDomain: 'test-basic-mining.firebaseapp.com',
  projectId: 'test-basic-mining',
  storageBucket: 'test-basic-mining.appspot.com',
  messagingSenderId: '31362404394',
  appId: '1:31362404394:web:1d23e06847717306573353'
}

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig)
// eslint-disable-next-line no-undef
const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  )
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png'
  }
  self.registration.showNotification(notificationTitle, notificationOptions)
})
