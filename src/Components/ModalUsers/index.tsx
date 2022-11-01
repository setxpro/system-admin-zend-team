import React from "react";

import * as C from "./styles";

const ModalUsers: React.FC = () => {
  return (
    <C.Container>
      <C.ContentModal>
        <form>
          <div>
            <input type="text" name="name" placeholder="Username" />
          </div>
        </form>
      </C.ContentModal>
    </C.Container>
  );
};

export default ModalUsers;
