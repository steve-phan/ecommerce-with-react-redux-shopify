import React from "react";

import { Switch, Route } from "react-router-dom";
import MainLayout from './Layouts/MainLayout'
import "./main.scss";
import Homepage from "./pages/HomePage";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" render={()=>(
            <MainLayout>
              <Homepage />
            </MainLayout>
          )} />
          <Route path="/signup" render={() => (
            <MainLayout>
              <Signup />
            </MainLayout>
          )} />
        </Switch>
    </div>
  );
}

export default App;
