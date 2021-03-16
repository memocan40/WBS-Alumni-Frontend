import './Chat.css';
import io from 'socket.io';
import socketClient from 'socket.io-client';

import { useState, useEffect } from 'react';

export default function Chat({username}) {
  let [inputvalue, setinputvalue] = useState('');
  let[name,setname]=useState(username);
  let [messages, setmessages] = useState([]);
  let [mouseclick, setmouseclick] = useState();

  const SERVER = 'http://localhost:3005/';
  const socket = socketClient(SERVER);

  useEffect(() => {
    socket.on('chat message', function (msg) {
      messages.push(msg);
      setmessages([...messages]);
    });
  }, []);

  let textfield = document.getElementById('input');
  if(name===undefined){setname("anonymous")};

  const submitHandler = (e) => {
    e.preventDefault();

    const msg = { inputvalue, name };
    socket.emit('chat message', msg);

    setmessages([...messages, msg]);

    textfield.value = '';
  };

  function updateScroll() {
    var element = document.getElementById('messages');
    element.scrollTop = element.scrollHeight;
  }

 
    if (mouseclick === false) {
		updateScroll();
	}


  console.log(messages);
  return (
    <div
      className="Chat"
      onMouseDown={() => {
        setmouseclick(true);
      }}
      onMouseUp={() => {
        setmouseclick(false);
      }}
      onMouseOver={() => {
        setmouseclick(false);
      }}>
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
  );
}
