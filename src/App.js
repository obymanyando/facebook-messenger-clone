import './App.css'
import { useState, useEffect } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import Message from './Message'
import firebase from 'firebase'
import db from './firebase'
import FlipMove from 'react-flip-move'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'

function App() {
	const [input, setInput] = useState('')
	const [messages, setMessages] = useState([])
	const [username, setUsername] = useState('')

	useEffect(() => {
		//onSnapshot contains all the data in the collection and will keep track of all changes
		db.collection('messages')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				//map through every doc and for each doc, grab doc.data and return it as an obj
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })),
				)
			})
	}, [])
	useEffect(() => {
		setUsername(prompt('Please enter your name'))
	}, []) //the brackets represent a dependency. In this case, could be <input>. If empty, the code inside Effect runs ONCE when the App loads. If <input>, the code will fire every single time you type in the input.

	const sendMessage = (e) => {
		e.preventDefault()
		//send messages to db
		db.collection('messages').add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		})
		setInput('')
	}

	return (
		<div className='App'>
			<img
				src='https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=50&h=50'
				alt=''
			/>

			<h1>Oby Messenger 😆 </h1>
			<h2>Welcome, {username}</h2>
			<form className='app__form'>
				<FormControl className='app__formControl'>
					<Input
						className='app__input'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder='Type here...'
					/>
					<IconButton
						className='app__iconButton'
						disabled={!input}
						variant='contained'
						color='primary'
						type='submit'
						onClick={sendMessage}>
						<SendIcon />
					</IconButton>
				</FormControl>
			</form>
			<FlipMove>
				{messages.map(({ id, message }) => (
					<Message key={id} username={username} message={message} />
				))}
			</FlipMove>
		</div>
	)
}

export default App
