import { Modal } from 'react-bootstrap';
import './style.css';

export default function Login({ login, setlogin }) {
  const handleClose = () => {
    setlogin(false);
  };

  return (
    <div>
      <Modal
        show={login}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        portalClassName="modal">
        <Modal.Body>
          <div class="modal-content-container">
            <h1 className="modal-heading">Log in</h1>
            <div className="modal-input-container">
              <label for="Name" id="name" className="modal-input-label">Name:</label>
              <input
                className="modal-input"
                type="text"
                placeholder="Enter Name"
                name="Name"
                id="Name"
                required></input>
            </div>
            <div className="modal-input-container">
              <label for="psw" className="modal-input-label">Password:</label>
              <input
                className="modal-input"
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                required></input>
            </div>
            <div className="modal-btn-wrapper">
              <button type="submit" class="modal-register-btn">
                Register
              </button>
              <button type="submit" class="modal-close-btn" onClick={handleClose}>
                Close
              </button>
            </div>  
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
