import { Routes, Route } from "react-router-dom";
import ChatIntro from "../Components/ChatIntro";
import ChatWindow from "../Components/ChatWindow";
import ModalUsers from "../Components/ModalUsers";
import Chat from "../Pages/Chat";
import Private from "../Pages/Private";
import RelatorioDeVendas from "../Pages/Tables/RelatorioDeVendas";
import TableUsers from "../Pages/Tables/Users";
import CreateUser from "../Pages/Tables/Users/CreateUser";
import UpdateUser from "../Pages/Tables/Users/UpdateUser";
import VendasDoFlex from "../Pages/Tables/VendasDoFlex";
import Security from "../Security";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Security>
            <Private>
              <VendasDoFlex />
            </Private>
          </Security>
        }
      />
      <Route
        path="/relatorio-vendas"
        element={
          <Security>
            <Private>
              <RelatorioDeVendas />
            </Private>
          </Security>
        }
      />
      <Route
        path="/users"
        element={
          <Security>
            <Private>
              <TableUsers />
            </Private>
          </Security>
        }
      />
      <Route
        path="/create-users"
        element={
          <Security>
            <Private>
              <CreateUser />
            </Private>
          </Security>
        }
      />
      <Route
        path="/users/:_id"
        element={
          <Security>
            <Private>
              <ModalUsers />
            </Private>
          </Security>
        }
      />
      <Route
        path="/user-update/:_id"
        element={
          <Security>
            <Private>
              <UpdateUser />
            </Private>
          </Security>
        }
      />
      {/** CHAT */}
      <Route
        path="/chat"
        element={
          <Security>
            <Private>
              <Chat>
                <ChatIntro />
              </Chat>
            </Private>
          </Security>
        }
      />
      <Route
        path="/chat/:id"
        element={
          <Security>
            <Private>
              <Chat>
                <ChatWindow />
              </Chat>
            </Private>
          </Security>
        }
      />
    </Routes>
  );
};
