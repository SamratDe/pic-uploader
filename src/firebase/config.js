import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyC3AKgAZomSb_ndbDCVjF9twQiTTfFTo4w',
	authDomain: 'firegram-6ec3c.firebaseapp.com',
	databaseURL: 'https://firegram-6ec3c.firebaseio.com',
	projectId: 'firegram-6ec3c',
	storageBucket: 'firegram-6ec3c.appspot.com',
	messagingSenderId: '478454360102',
	appId: '1:478454360102:web:2c744215bec8e6c43e5ee7',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestorage = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestorage, timeStamp }
