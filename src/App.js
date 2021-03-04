import React, { useEffect, useState, Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './i18next-config';

//Views
import Profile from './Views/UserProfile';
import LetsCodeView from './Views/LetsCode';
import AllBatchesView from './Views/AllBatches';
import ReachOutView from './Views/ReachOut';
import Login from './Views/Login';
import Register from './Views/Register';
import LandingPageView from './Views/LandingPage';
import HomePageView from './Views/HomePage';

//App general styles
import './App.css';

function App() {
  //state variable for logged user
  const [user, setUser] = useState('');
  
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Switch>
          
          {/*----user profile route---- */}
          <Route path="/profile/">
            <Profile />
          </Route>

          {/*----lets code route---- */}
          <Route path="/letscode/">
            <LetsCodeView />
          </Route>

          {/*----reach out route---- */}
          <Route path="/reachout/">
            <ReachOutView />
          </Route>

          {/*----all batches route---- */}
          <Route path="/allbatches/">
            <AllBatchesView />
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
