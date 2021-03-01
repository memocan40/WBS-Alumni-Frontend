import {useState}from "react";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import "./Login.css";

export default function Login({login,setlogin}) {
  

  const handleClose = () => {setlogin(false);}


  return (
    <>
      

      <Modal
        show={login}
        onHide={handleClose}
        backdrop="false"
        keyboard={false}
        portalClassName="modal"
      >
        <Modal.Header>
          <Modal.Title className="Reg"><h1>Login</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="container"> 
    <label for="Name" id="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="Name" id="Name" required></input>

     

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
    
    <button type="submit" class="registerbtn">Login</button>
    <button type="submit" class="close" onClick={handleClose}>X</button>
    </div> 
        </Modal.Body>
       
      </Modal>
    </>
  );
}