import {useState}from "react";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import "./Register.css";

export default function Register({show,setshow}) {
  

  const handleClose = () => {setshow(false);}


  return (
    <>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        portalClassName="modal"
      >
        <Modal.Header>
          <Modal.Title className="Reg"><h1>Register</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="container"> 
    <label for="Name" id="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="Name" id="Name" required></input>

      <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
    
    <button type="submit" class="registerbtn">Register</button>
    </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="registerbtn">
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}