import './Chat.css';
import socketClient from 'socket.io-client';

import { useState, useEffect } from 'react';

export default function Chat({ username }) {
	const [inputvalue, setinputvalue] = useState('');
	const [messages, setmessages] = useState([]);
	const [mouseclick, setmouseclick] = useState();
  	const [chatwindow,setchatwindow]=useState("chat-wrapper-invisible");

	const SERVER = 'https://hidden-shelf-31461.herokuapp.com';
	const socket = socketClient(SERVER);

	useEffect(() => {
		socket.on('chat message', function (msg) {
			messages.push(msg);
			setmessages([...messages]);
		});
	}, []);

	let textfield = document.getElementById('chat-input');

	const submitHandler = (e) => {
		e.preventDefault();
		if(inputvalue){
		const msg = { inputvalue, username };
		socket.emit('chat message', msg);

		setmessages([...messages, msg]);

		textfield.value = '';
		setinputvalue("");}
	};

  const Chatbutton=()=>{
    if(chatwindow==="chat-wrapper"){
      setchatwindow("chat-wrapper-closed")
    }
    else if(chatwindow==="chat-wrapper-closed" || chatwindow === "chat-wrapper-invisible"){
      setchatwindow("chat-wrapper")
    }
  }

	function updateScroll() {
		var element = document.getElementById('messages-wrapper');
		element.scrollTop = element.scrollHeight;
	}

	if (mouseclick === false) {
		updateScroll();
	}

	console.log(messages);
	return (
		<div>
			<button id="chat-window-button" onClick={Chatbutton}>
				Chat
			</button>
			<div
				className={chatwindow}
				onMouseDown={() => {
					setmouseclick(true);
				}}
				onMouseUp={() => {
					setmouseclick(false);
				}}
				onMouseOver={() => {
					setmouseclick(false);
				}}
			>
				<ul id="messages-wrapper">
						{messages.map((iteration, index) => {
							return (
								<li id="chat-username">
									{iteration.username}
									<li className="chat-message">
										{iteration.inputvalue}
									</li>
								</li>
							);
						})}
				</ul>
				<form onSubmit={submitHandler} className="chat-input-wrapper" action="">
					<input
						id="chat-input"
						autocomplete="off"
						onChange={(event) => {
							setinputvalue(event.target.value);
						}}
					/>
					<button id="button">Send</button>
				</form>
			</div>
		</div>
	);
}
