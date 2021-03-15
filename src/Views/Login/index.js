import LoginModal from '../../Components/Modal/Login.js';

export default function Login({loggedUser, setLoggedUser}) {
  return (
    <>
      <LoginModal setLoggedUser={setLoggedUser} loggedUser={loggedUser}  />
    </>
  );
}
