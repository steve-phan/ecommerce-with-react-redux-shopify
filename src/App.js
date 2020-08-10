import React, { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import "./main.scss";
import Homepage from "./pages/HomePage";

import { auth, handleUserProfile } from "./components/firebase/utils";
//page
import Login from "./pages/Login";
import Registation from "./pages/Registation";

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;
  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({
        ...initialState,
      });
      // if (!userAuth) {
      //   this.setState({
      //     ...initialState
      //   })
      // };

      // this.setState({
      //   currentUser: userAuth,
      // });
    });
  }
  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Homepage />
              </MainLayout>
            )}
          />
          <Route
            path="/signup"
            render={() => currentUser ? <Redirect push to='/' /> :
               (
              <MainLayout currentUser={currentUser}>
                <Registation />
              </MainLayout>
            )}
          />
          <Route
            path="/signin"
            render={() =>
              currentUser ? (
                <Redirect push to="/" />
              ) : (
                <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
