import React from "react";
import Navigation from "./components/Navigation/Navigation";
import StateTable from "./components/StateTable/StateTable";
import StateDataContextProvider from "./Context/StateDataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TestingStats from "../src/components/TestingStats/TestingStats";
import HospitalBedsStats from "./components/HospitalBeds/HospitalBedsStats";
import Helpline from "./components/Helpline/Helpline";
import Notifications from "./components/Notifications/Notifications";

function App() {
  return (
    <Router>
      <div className='App'>
        <StateDataContextProvider>
          <Navigation />
          <Switch>
            <Route path='/testing-stats' exact component={TestingStats} />
            <Route path='/hospital-beds' exact component={HospitalBedsStats} />
            <Route path='/helpline-info' exact component={Helpline} />
            <Route path='/notifications' exact component={Notifications} />
            <Route path='/' exact component={StateTable} />
          </Switch>
        </StateDataContextProvider>
      </div>
    </Router>
  );
}

export default App;
