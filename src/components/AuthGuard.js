import React from "react";
import { useCurrentUser } from "store";
import { Redirect } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const [currentUser] = useCurrentUser();
  console.log(currentUser);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return children;
};

export default AuthGuard;
