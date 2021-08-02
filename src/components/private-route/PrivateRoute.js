import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";
import { loginSuccess } from "../login/loginSlice";
import { fetchNewAccessJWT } from "../../api/userApi";
import { getUserProfile } from "../../pages/dashboard/userAction";

// Sets up the router for private routes
function PrivateRoute({ children, ...rest }) {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };

    !user._id && dispatch(getUserProfile());

    !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("crmSite") &&
      updateAccessJWT();

    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth, user._id]);

  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
