import React, { useEffect } from "react";
import { Route, useNavigate, useLocation } from "react-router";
import Paths, { publicRoutes } from "./paths";
import CommonRouter from "./common";
import { Home, Book, Search } from "../components";

const ProtectedRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (publicRoutes.includes(location.pathname)) {
      navigate(Paths.home, { replace: true });
    }
  }, [location, navigate]);

  return (
    <CommonRouter>
      <Route index element={<Home />} />
      <Route path={Paths.book} element={<Book />} />
      <Route path={Paths.search} element={<Search />} />
    </CommonRouter>
  );
};

export default ProtectedRouter;
