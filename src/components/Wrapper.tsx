import React from "react";
import { Route, Routes } from "react-router";
import { useState } from "react";
import Login from "./Login";
import App from "./App";
import { TokenType } from "../types/Types";

function Wrapper() {
  const [authToken, setAuthToken] = useState<TokenType>(null);
  return (
    <Routes>
      <Route path="/" element={<Login setAuthToken={setAuthToken} />} />
      <Route
        path="/app"
        element={<App setAuthToken={setAuthToken} authToken={authToken} />}
      />
    </Routes>
  );
}

export default Wrapper;
