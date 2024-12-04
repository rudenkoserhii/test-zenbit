import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { Swagger } from "./ApiDocs/ApiDocs";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Swagger />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
