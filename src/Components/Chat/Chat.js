import './Chat.css';
import io from 'socket.io';
import socketClient from 'socket.io-client';

import { useState, useEffect } from 'react';

export default function Chat({ username }) {
	let [inputvalue, setinputvalue] = useState('');
	let [name, setname] = useState(username);
	let [messages, setmessages] = useState([]);
	let [mouseclick, setmouseclick] = useState();
  let[chatwindow,setchatwindow]=useState("Chat");

	const SERVER = 'https://hidden-shelf-31461.herokuapp.com';
	const socket = socketClient(SERVER);

	useEffect(() => {
		socket.on('chat message', function (msg) {
			messages.push(msg);
			setmessages([...messages]);
		});
	}, []);

	let textfield = document.getElementById('input');
	if (name === undefined) {
		setname('anonymous');
	}

	const submitHandler = (e) => {
		e.preventDefault();
		if(inputvalue){
		const msg = { inputvalue, name };
		socket.emit('chat message', msg);

		setmessages([...messages, msg]);

		textfield.value = '';
		setinputvalue("");}
	};

  const Chatbutton=()=>{
    if(chatwindow==="Chat"){
      setchatwindow("Chatclosed")
      console.log("chat closed")
    }
    else if(chatwindow==="Chatclosed"){
      setchatwindow("Chat")
    }
  }

	function updateScroll() {
		var element = document.getElementById('messages');
		element.scrollTop = element.scrollHeight;
	}

	if (mouseclick === false) {
		updateScroll();
	}

	console.log(messages);
	return (
		<div>
		
			<button id="chatwindowbutton" onClick={Chatbutton}>
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
				<ul id="messages">
					<div id="messagesli">
						{messages.map((iteration, index) => {
							return (
								<li id="username">
									{iteration.name}
									<li className="input" id="messageli">
										{iteration.inputvalue}
									</li>
								</li>
							);
						})}
					</div>
				</ul>
				<form onSubmit={submitHandler} id="form" action="">
					<input
						id="input"
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
