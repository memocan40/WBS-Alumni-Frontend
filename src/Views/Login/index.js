import LoginModal from "../../Components/Modal/Login.js";

import "./style.css";

export default function Login({ loggedUser, setLoggedUser, setToken }) {
  return (
    <div className="login-page-wrapper">
      <LoginModal
        setLoggedUser={setLoggedUser}
        loggedUser={loggedUser}
        setToken={setToken}
      />
    </div>
  );
}
