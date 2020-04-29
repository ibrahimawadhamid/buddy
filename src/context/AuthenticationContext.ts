import React from "react";

const AuthenticationContext = React.createContext<{
  user: firebase.User | null;
}>({ user: null });

export default AuthenticationContext;
