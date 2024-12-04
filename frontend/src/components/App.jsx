import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks";
import MoonLoader from "react-spinners/ClipLoader";
import { ApiDocs } from "./ApiDocs/ApiDocs";

const HomePage = lazy(() => import("../pages/Home/Home"));
const RegisterPage = lazy(() => import("../pages/Register/Register"));
const LoginPage = lazy(() => import("../pages/Login/Login"));
const ForgotPage = lazy(() => import("../pages/Forgot/Forgot"));
const PostsPage = lazy(() => import("../pages/Posts/Posts"));

const override = {
  display: "block",
  margin: "calc((100vh - 150px) / 2) auto",
};

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <MoonLoader
        color={"#172133"}
        loading={isRefreshing}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="api/docs" element={<ApiDocs />} />
          <Route
            path="/auth/signup"
            element={
              <RestrictedRoute
                redirectTo="/posts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/auth/login"
            element={
              <RestrictedRoute redirectTo="/posts" component={<LoginPage />} />
            }
          />
          <Route
            path="/auth/forgot"
            element={
              <RestrictedRoute redirectTo="/posts" component={<ForgotPage />} />
            }
          />
          <Route
            path="/posts"
            element={
              <PrivateRoute
                redirectTo="/auth/login"
                component={<PostsPage />}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
