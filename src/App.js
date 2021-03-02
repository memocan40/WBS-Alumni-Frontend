import React, { useEffect, useState, Suspense } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./i18next_config";

//Views
import LandingPageView from "./Views/Landingpage/index";
import HomePageView from "./Views/Homepage";
import LanguageSelector from "./Views/Languageselector";

//App general styles
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Suspense fallback={null}>
        <LanguageSelector />
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
      </Suspense>
    </div>
  );
}

export default App;
