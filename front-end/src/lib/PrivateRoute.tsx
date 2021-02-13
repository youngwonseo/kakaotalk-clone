import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";


interface Props extends RouteProps {
  component: any;
}


const PrivateRoute = ({ component: Component,  ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;