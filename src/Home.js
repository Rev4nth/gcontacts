import React from "react";
import { useCurrentUser } from "store";

const Home = () => {
  const [currentUser] = useCurrentUser();
  return (
    <div>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>
  );
};

export default Home;
