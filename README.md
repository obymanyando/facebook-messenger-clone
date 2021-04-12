# Facebook Messenger App

Here is a [Demo on Firebase](https://facebook-messenger-4cdce.web.app/).

## Technologies used:

- React (including Hooks)
- Firebase (Firestore)
- Material UI
_____________________________________________________

To use:

1. Get a Firebase API Key from [Firebase](https://firebase.google.com/)
2. Copy and Paste *Firebase config* details in ***Firebase.js*** file. Config file looks something like this:
   
   ```js
   const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDzy6QXxgWJugE00TpTOutVv5wkr4C32zE',
	authDomain: 'facebook-messenger-4cdce.firebaseapp.com',
	projectId: 'facebook-messenger-4cdce',
	storageBucket: 'facebook-messenger-4cdce.appspot.com',
	messagingSenderId: '442172154237',
	appId: '1:442172154237:web:097de62ffea8a55a49ec14',})
   ```
3. The ***Firebase.js*** file should look something like this: 
   ```js
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
   ```
   
   Have fun 💻
