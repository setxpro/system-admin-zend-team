import React, { useContext } from "react";
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
          {/* <Link to="/">Vendas do flex</Link> */}
          <Link to="/relatorio-vendas">Finanças</Link>
          <Link to="/users">Usuários</Link>
          <Link to="/">Clientes</Link>
          <Link to="/">Support Site</Link>
          <Link to="/chat">Chat</Link>
          <Link to="" onClick={signout}>
            LOGOUT
          </Link>
        </ul>
      </C.Nav>
    </C.Container>
  );
};

export default Sidebar;
