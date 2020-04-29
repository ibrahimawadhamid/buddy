import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
  condition: boolean;
}> = (props) => {
  return props.condition ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/page/register" />
  );
};

export default PrivateRoute;
