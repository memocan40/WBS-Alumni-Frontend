import React, { useEffect, useState, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

//Api call 
import Api from './Api/Api.js';

import './i18next-config';
//Components
import Loader from './Components/Loader';

//Views
import Profile from './Views/Userprofile';
import LetsCodeView from './Views/Letscode';
import AllBatches from './Views/Allbatches';
import ReachOutView from './Views/Reachout';
import Login from './Views/Login';
import Register from './Views/Register';
import LandingPageView from './Views/Landingpage';
import HomePageView from './Views/Homepage';
import StudentProfile from "./Views/Studentprofile";

//App general styles
import './App.css';

function App() {
  //state variable for logged user
  //const [user, setUser] = useState('');

  //state variable for all students
  const [studentList, setStudentList] = useState('');
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    Api.getAllUsers()
      .then((res) => {
        console.log(res);
        setStudentList(res);
        setLoggedUser(res[16]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <Suspense fallback={null}>
        <Switch>
          
          {/*----user profile route---- */}
          <Route path="/profile/">
            {studentList ? <Profile userObject={loggedUser} setUserObject={setLoggedUser}/> : <Loader /> }
          </Route>

          {/*----lets code route---- */}
          <Route path="/letscode/">
            <LetsCodeView />
          </Route>

          {/*----reach out route---- */}
          <Route path="/reachout/">
            <ReachOutView students={studentList}/>
          </Route>

          {/*----all batches route---- */}
          <Route path="/allbatches/">
            <AllBatches />
          </Route>
          {/*------ studentprofile route -----*/}
          <Route path="/studentprofile">
            <StudentProfile/>
          </Route>

          {/*---- Home Page Route---- */}
          <Route path={'/home'}>
            <HomePageView />
          </Route>

          {/*---- Register Route---- */}
          <Route path={'/register'}>
            <Register />
          </Route>

          {/*---- Log-in Route---- */}
          <Route path={'/login'}>
            <Login />
          </Route>

          {/*---- Landing Page Route---- */}
          <Route path={'/'}>
            <LandingPageView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
