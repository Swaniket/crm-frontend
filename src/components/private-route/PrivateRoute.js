import React from "react";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";

const isAuthenticated = true;

// Sets up the router for private routes
function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest}
      render={() =>
        isAuthenticated ? (
          <DefaultLayout>{children}</DefaultLayout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default PrivateRoute;
