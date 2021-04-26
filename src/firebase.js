import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBBFJscVH4q7qOEmjM3ghOqjbrr3YVgeds",
  authDomain: "g-clone-6dcfd.firebaseapp.com",
  projectId: "g-clone-6dcfd",
  storageBucket: "g-clone-6dcfd.appspot.com",
  messagingSenderId: "875328127179",
  appId: "1:875328127179:web:a8244ac44ef61833279b4e"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
