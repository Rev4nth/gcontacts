import firebaseApp from "firebaseApp";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useCurrentUser } from "store";
import Home from "./Home";
import Login from "./Login";

function App() {
  const [, setCurrentUser] = useCurrentUser();
  const [isFetchingUser, setIsFetchingUser] = useState(false);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(async (user) => {
      try {
        setCurrentUser(user);
        setIsFetchingUser(false);
      } catch (error) {
        console.log(error);
      }
    });
  }, [setCurrentUser]);

  if (isFetchingUser) {
    return "Loading";
  }

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
