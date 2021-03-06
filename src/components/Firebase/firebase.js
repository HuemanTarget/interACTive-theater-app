import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    // Get a reference to the database service
    this.db = app.firestore()
    // realtime database
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

  doSignOut = () => this.auth.signOut()

  getTimestamp = () => app.firestore.Timestamp
  // firebase.firestore.FieldValue.serverTimestamp()
}

const firebase = new Firebase()

export default firebase
