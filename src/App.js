import React, { useEffect } from "react";

import { Switch, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import "./main.scss";
import Homepage from "./pages/HomePage";

//page
import Login from "./pages/Login";
import Registation from "./pages/Registation";
//redux
import { checkUserSession } from "./redux/User/user.actions";
import { useDispatch } from "react-redux";
import Recovery from "./pages/Recovery";
//hoc
import WithAuth from "./hoc/withAuth";

import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import WithAdminAuth from "./hoc/withAdminAuth";
import AdminToolbar from "./components/AdminToolbar";

const App = (props) => {
  // const [currentUser, setcurrentUser] = useState("");
  // authListener = null;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
  return (
    <div className="App">
      <AdminToolbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )}
        />
        <Route
          path="/signup"
          render={() => (
            <MainLayout>
              <Registation />
            </MainLayout>
          )}
        />
        
        <Route
          path="/signin"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <MainLayout>
                <Admin />
              </MainLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
