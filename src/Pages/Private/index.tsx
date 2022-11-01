import { ReactNode } from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

import * as C from "./styles";

const Private = ({ children }: { children: ReactNode }) => {
  return (
    <C.Container>
      <Sidebar />
      <C.ContentArea>
        <Header />
        <C.ContentTable>{children}</C.ContentTable>
      </C.ContentArea>
    </C.Container>
  );
};

export default Private;
