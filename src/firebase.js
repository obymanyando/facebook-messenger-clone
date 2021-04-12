import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDzy6QXxgWJugE00TpTOutVv5wkr4C32zE',
	authDomain: 'facebook-messenger-4cdce.firebaseapp.com',
	projectId: 'facebook-messenger-4cdce',
	storageBucket: 'facebook-messenger-4cdce.appspot.com',
	messagingSenderId: '442172154237',
	appId: '1:442172154237:web:097de62ffea8a55a49ec14',
})

const db = firebaseApp.firestore()

export default db
