import "./Chat.css";
import io from "socket.io";

import {useState}from "react";

export default function Chat(){
let[inputvalue,setinputvalue]=useState();
let[username,setusername]=useState("anonym");
    var socket = io();

  
   //socket.on('chat message', function(msg) {
    //var item = document.createElement('li');
    //item.textContent = msg;
    //messages.appendChild(item);
    //window.scrollTo(0, document.body.scrollHeight);});
let messages=document.getElementById("messages");
let textfield=document.getElementById("input");
 
  const submitHandler=(e)=>{
      e.preventDefault();
    if (inputvalue!=""&&username) {
      const message={inputvalue,username}
      socket.emit('chat message', message);
      setinputvalue("");
        var item = document.createElement('li');
        item.textContent = message;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
        textfield.value=""
  }}
  
    return(
        <div>
            <ul id="messages"></ul>
    <form onSubmit={submitHandler} id="form" action="">
      <input id="input" autocomplete="off" onChange={(event)=>{setinputvalue(event.target.value)}}/><button id="button">Send</button>
      </form>
        </div>
    )
}