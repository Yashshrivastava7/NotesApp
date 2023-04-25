import React from "react";
import { Route, Routes } from "react-router";
import { useState } from "react";
import Login from "./Login";
import App from "./App";
import { TokenType } from "../types/Types";

function Wrapper() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/app"
        element={<App />}
      />
    </Routes>
  );
}

export default Wrapper;
