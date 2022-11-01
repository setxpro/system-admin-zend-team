import { useContext } from "react";
import { AuthContext } from "../Contexts/Auth/AuthContext";
import SignInSide from "./../Pages/Login/Signin/index";

const Security = ({ children }: { children: JSX.Element }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <SignInSide />;
  }
  return children;
};

export default Security;
