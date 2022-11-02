import React from "react";
import { ToastContainer } from "react-toastify";
import { RoutesApp } from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
export const App = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <GlobalStyle />
      <RoutesApp />
    </React.Fragment>
  );
};
