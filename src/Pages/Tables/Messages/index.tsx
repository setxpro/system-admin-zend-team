import React, { useState } from "react";
import MessageItems from "./MessageItems";

import * as C from "./styles";

const MessagesContact: React.FC = () => {
  const [inputFilter, setInputFilter] = useState("");

  return (
    <C.Container>
      <C.HeaderContent>
        <div className="btn-register">
          <h2>Mensagens</h2>
        </div>
        <div></div>
        <div className="input-area">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={inputFilter}
            onChange={(e) => setInputFilter(e.target.value)}
          />
        </div>
      </C.HeaderContent>
      <C.Content>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Mensagem</th>
              <th>+ Info</th>
              <th>Ações</th>
            </tr>
          </thead>
          <MessageItems inputFilter={inputFilter} />
        </table>
      </C.Content>
    </C.Container>
  );
};

export default MessagesContact;
