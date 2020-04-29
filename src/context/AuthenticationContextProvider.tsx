import React, { useState, useEffect } from "react";

import { fireBaseAuth } from "../firebase";
import AuthenticationContext from "./AuthenticationContext";

const AuthenticationContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    fireBaseAuth.onAuthStateChanged((userAuth) => setUser(userAuth));
  }, []);

  return (
    <AuthenticationContext.Provider value={{ user }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
