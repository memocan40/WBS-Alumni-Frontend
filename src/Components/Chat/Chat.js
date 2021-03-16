import './Chat.css';
import io from 'socket.io';
import socketClient from 'socket.io-client';

import { useState, useEffect } from 'react';

export default function Chat({username}) {
  let [inputvalue, setinputvalue] = useState('');
  let [messages, setmessages] = useState([]);
  let [mouseclick, setmouseclick] = useState();

  const SERVER = 'http://127.0.0.1:3005';
  const socket = socketClient(SERVER);

  useEffect(() => {
    socket.on('chat message', function (msg) {
      messages.push(msg);
      setmessages([...messages]);
    });
  }, []);

  let textfield = document.getElementById('input');
  let messagess = document.getElementById('messages');

  const submitHandler = (e) => {
    e.preventDefault();

    const msg = { inputvalue, username };
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

  console.log(mouseclick);
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
                {iteration.username}
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
