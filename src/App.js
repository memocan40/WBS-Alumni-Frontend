import React, { useEffect, useState, Suspense } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./i18next-config";

//Views
import LetsCodeView from "./Views/Letscode";
import AllBatchesView from "./Views/Allbatches";
import ReachOutView from "./Views/Reachout";
import LandingPageView from "./Views/Landingpage/index";
import HomePageView from "./Views/Homepage";

//App general styles
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Suspense fallback={null}>
        <Switch>

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
