import React, { useEffect, useState, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

//Api call 
import Api from './Api/Api.js';
import Countries from './Api/Cities';

import './i18next-config';
//Components
import Loader from './Components/Loader';

//Views
import Profile from './Views/Userprofile';
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
  const [loggedUser, setLoggedUser] = useState('');
  const [cities, setCities] = useState('');
  const [interests, setInterests] = useState('');
  const [workStatus, setWorkStatus] = useState('');
  const [batches, setBatches] = useState('');

  useEffect(() => {
    Api.getAllUsers()
      .then((res) => {
        console.log(res);
        setStudentList(res);
        const userLogged= res.filter((user)=> {
          return user.id === 558;
        })
        setLoggedUser(userLogged[0]);
      })
      .catch((err) => {
        console.error(err);
      });

    Api.getInterests()
    .then((res) => {
      const filteredInterests = res.map((int)=> {
        return  int.name;
      })
      setInterests(filteredInterests);
    })
    .catch((err) => {
      console.error(err);
    });  

    Api.getWorkStatuses()
    .then((res)=> {
      setWorkStatus(res.data);
    });

    Api.getAllBatches()
    .then((res)=> {
      console.log(res);
      setBatches(res.data);
    });

    Countries.getAllCities().then((res) => {
      const filteredNames = res.data.map((city)=>{
        return {name : city.city};
      })
      console.log(filteredNames);
      setCities(filteredNames);

    }).catch((err)=> {
      console.error(err);
    })
  }, []);


  return (
    <div className="App">
      <Suspense fallback={null}>
        <Switch>
          
          {/*------ studentprofile route -----*/}
          <Route path="/studentprofile/:userId">
            <StudentProfile obj={studentList}/>
          </Route>

          {/*----user profile route---- */}
          <Route path="/profile/">
            {studentList ? <Profile userObject={loggedUser} setUserObject={setLoggedUser} cities={cities} workStatus={workStatus} batches={batches}/> : <Loader /> }
          </Route>

          {/*----reach out route---- */}
          <Route path="/reachout/">
            { batches && cities && workStatus ? <ReachOutView students={studentList} batches={batches} cities={cities} workstatus={workStatus}/> : <Loader/>}
          </Route>

          {/*----all batches route---- */}
          <Route path="/allbatches/">
            {batches ? <AllBatches obj={batches} /> : <Loader/>}
          </Route>
          
          {/*---- Home Page Route---- */}
          <Route path='/home'>
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
