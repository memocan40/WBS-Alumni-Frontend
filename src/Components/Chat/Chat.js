import "./Chat.css";
import io from "socket.io";

import {useState}from "react";

export default function Chat(){
let[inputvalue,setinputvalue]=useState();
    var socket = io();

  
   //socket.on('chat message', function(msg) {
    //var item = document.createElement('li');
    //item.textContent = msg;
    //messages.appendChild(item);
    //window.scrollTo(0, document.body.scrollHeight);});

 
 
  const submitHandler=(e)=>{
      e.preventDefault();
    if (inputvalue) {
      socket.emit('chat message', input.value);
      input.value = '';
  }}
    return(
        <div>
            <ul id="messages"></ul>
    <form onSubmit={submitHandler} id="form" action="">
      <input id="input" autocomplete="off" onChange={(event)=>{setinputvalue(event.target.value)}}/><button>Send</button>
      </form>
        </div>
    )
}