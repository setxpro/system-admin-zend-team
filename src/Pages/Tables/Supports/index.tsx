import React, { useState } from "react";

import * as C from "./styles";
import SupportItems from "./SupportItems";

const Supports: React.FC = () => {
  const [inputFilter, setInputFilter] = useState("");

  return (
    <C.Container>
      <C.HeaderContent>
        <div className="btn-register">
          <h2>Supports</h2>
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
              <th>Tipo</th>
              <th>Comentário</th>
              <th>Imagem</th>
              <th>Ações</th>
            </tr>
          </thead>
          <SupportItems inputFilter={inputFilter} />
        </table>
      </C.Content>
    </C.Container>
  );
};

export default Supports;
