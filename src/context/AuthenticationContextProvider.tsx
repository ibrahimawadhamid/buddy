import React, { useState } from "react";

import AuthenticationContext, {
  SystemUser,
  dummyUser,
} from "./AuthenticationContext";

const AuthenticationContextProvider: React.FC = (props) => {
  const [currentUser, setCurrentUser] = useState<SystemUser | null>(null);

  const loginHandler = () => {
    setCurrentUser(dummyUser);
  };

  const logoutHandler = () => {
    setCurrentUser(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{ currentUser, loginHandler, logoutHandler }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
