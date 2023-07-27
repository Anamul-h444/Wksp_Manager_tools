import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Parts = lazy(() => import("../src/components/PartsBlr"));
const BlrForm = lazy(() => import("../src/components/BlrForm"));

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/parts/blr" element={<Parts />} />
      <Route path="/blr/form" element={<BlrForm />} />
    </Routes>
  );
};

export default PageRouter;
