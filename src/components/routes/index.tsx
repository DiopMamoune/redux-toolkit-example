import React from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "../../pages";
import Login from "../../pages/login";
import Product from "../product";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
