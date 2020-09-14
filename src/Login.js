import React from "react";

import firebaseApp, { googleAuthProvider } from "firebaseApp";
import { useHistory, Redirect } from "react-router-dom";
import { useCurrentUser } from "store";

const Login = () => {
  const history = useHistory();
  const [currentUser] = useCurrentUser();

  const signInWithGoogle = async () => {
    try {
      await firebaseApp.auth().signInWithPopup(googleAuthProvider);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <button type="primary" onClick={signInWithGoogle}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
