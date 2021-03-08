import "./Chat.css";
import io from "socket.io";
 import socketClient from "socket.io-client";

import {useState}from "react";

export default function Chat(){
let[inputvalue,setinputvalue]=useState();
let[username,setusername]=useState("anonym");
let[messages,setmessages]=useState([]);

 
const SERVER = "http://127.0.0.1:3005";

const socket = socketClient(SERVER);

  

  
   //socket.on('chat message', function(msg) {
    //var item = document.createElement('li');
    //item.textContent = msg;
    //messages.appendChild(item);
    //window.scrollTo(0, document.body.scrollHeight);});

let textfield=document.getElementById("input");
let messagess=document.getElementById("messages");


 
  const submitHandler=(e)=>{
      e.preventDefault();
    if (inputvalue!==""&&username) {
      const msg={inputvalue,username};
      socket.emit('chat message', msg);
      setinputvalue("");
        setmessages([...messages, msg]);

        textfield.value="";
  }}


    socket.on('chat message', function(msg) {
      
    if (inputvalue!==""&&username) {
      const msg={inputvalue,username};
      
      setinputvalue("");
        setmessages([...messages, msg]);

        
    }});
        
      ;
  
    return(
        <div>
            <ul id="messages"><div id="messagesli">{messages.map((iteration,index)=>{return(<li id="username">{iteration.username}<li className="input" id="messageli">{iteration.inputvalue}</li></li>)})}</div></ul>
    <form onSubmit={submitHandler} id="form" action="">
      <input id="input" autocomplete="off" onChange={(event)=>{setinputvalue(event.target.value)}}/><button id="button">Send</button>
      </form>
        </div>
    )
}