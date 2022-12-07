import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import Paths from "./paths";
import StatusPage from "../statusPage/status-page.component";

const CommonRouter = (props) => {
  const { children } = props;
  return (
    <Suspense
    // fallback={
    // }
    >
      <Routes>
        {/*  */}
        {children}

        {/* Common paths */}
        <Route
          path={Paths[403]}
          element={
            <StatusPage
              code="403"
              title="Not Auth"
              helperText="Not Auth Helper"
              btnText="Login"
            />
          }
        />
        <Route
          path={Paths.systemError}
          element={
            <StatusPage
              code=""
              title="System Error"
              helperText="Some thing Wrong"
              btnText="reload"
            />
          }
        />
        <Route
          path={Paths.pageNotFound}
          element={
            <StatusPage
              code="404"
              title="Page Not Found"
              helperText="Page Not FoundHelper"
              btnText="go Back"
            />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default CommonRouter;
