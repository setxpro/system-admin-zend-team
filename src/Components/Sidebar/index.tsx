import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/AuthContext";

import * as C from "./styles";

const Sidebar = () => {
  const { signout } = useContext(AuthContext);

  return (
    <C.Container>
      <C.Logo>
        <h1>Zend Team</h1>
      </C.Logo>
      <C.Nav>
        <ul>
          <Link to="/">
            <C.DashboardIcon />
            Dashboard
          </Link>
          <Link to="/relatorio-vendas">
            <C.FinanceIcon />
            Finanças
          </Link>
          <Link to="/contact">
            <C.ContactIcon />
            Contato Site
          </Link>
          <Link to="/users">
            <C.UsersIcon />
            Usuários
          </Link>
          <Link to="/">
            <C.ClientIcon />
            Clientes
          </Link>
          <Link to="/supports">
            <C.SupportIcon />
            Support
          </Link>
          <Link to="/chat">
            <C.ChatIcon />
            Chat
          </Link>
          <Link to="" onClick={signout}>
            <C.LogoutIcon />
            LOGOUT
          </Link>
        </ul>
      </C.Nav>
    </C.Container>
  );
};

export default Sidebar;
