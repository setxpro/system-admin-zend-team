import { ToastContainer } from "react-toastify";
import { RoutesApp } from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
export const App = () => {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <RoutesApp />
    </>
  );
};
