import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js'
import { renderProducts } from './services/productService.js'
import { renderUsers } from './services/userService.js'
import { addProduct } from './services/addProduct.js'
import * as firebase from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyCpe89nAC81l_1vN_11BACuMEhPuL1nmkI',
  authDomain: 'test-site-8000d.firebaseapp.com',
  projectId: 'test-site-8000d',
  storageBucket: 'test-site-8000d.appspot.com',
  messagingSenderId: '433046391833',
  appId: '1:433046391833:web:4f91f84e9911a9fc136e88',
  measurementId: 'G-1C2F6HY9NT',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

renderProducts(db, firebase)
renderUsers(db, firebase)
