import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

//Views
import LandingPageView from "./Views/LandingPage";
import HomePageView from "./Views/HomePage";

//App general styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>

        {/*---- Home Page Route---- */}
        <Route path={"/home"}>
          <HomePageView />
        </Route>
        
         {/*---- Landing Page Route---- */}
        <Route path={"/"}>
          <LandingPageView />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
