import React from "react";
import ReactDOM from "react-dom/client";
import Wrapper from "./components/Wrapper";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper />
    </BrowserRouter>
    <Toaster />
  </React.StrictMode>
);
