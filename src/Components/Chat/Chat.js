import "./Chat.css";
import io from "socket.io";

import {useState}from "react";

export default function Chat(){
let[inputvalue,setinputvalue]=useState();
let[username,setusername]=useState("anonym");
let[messages,setmessages]=useState([]);
    var socket = io();

  
   //socket.on('chat message', function(msg) {
    //var item = document.createElement('li');
    //item.textContent = msg;
    //messages.appendChild(item);
    //window.scrollTo(0, document.body.scrollHeight);});

let textfield=document.getElementById("input");
 
  const submitHandler=(e)=>{
      e.preventDefault();
    if (inputvalue!==""&&username) {
      const message={inputvalue,username};
      socket.emit('chat message', message);
      setinputvalue("");
        setmessages([...messages, message]);
        messages.map((iteration,index)=>{console.log(iteration,index)});
       window.scrollTo(0,document.querySelector("#messagesli").scrollHeight);
        textfield.value="";
  }}
  
    return(
        <div>
            <ul id="messages"><div id="messagesli">{messages.map((iteration,index)=>{return(<li id="messageli">User:{iteration.username}<li>{iteration.inputvalue}</li></li>)})}</div></ul>
    <form onSubmit={submitHandler} id="form" action="">
      <input id="input" autocomplete="off" onChange={(event)=>{setinputvalue(event.target.value)}}/><button id="button">Send</button>
      </form>
        </div>
    )
}