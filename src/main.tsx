// import React from "react";
import './assets/css/main.css'
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/landing/landing";
import RouterConfig from './config/router.config';
// import LoginPage from "./pages/auth/login";

const rootElem = ReactDOM.createRoot(document.getElementById("root") as any);
rootElem.render(
  <>
  <RouterConfig />
  </>
);
