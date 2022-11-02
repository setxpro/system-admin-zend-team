import { Routes, Route } from "react-router-dom/dist";
import ChatIntro from "../Components/ChatIntro";
import ChatWindow from "../Components/ChatWindow";
import ModalUsers from "../Components/ModalUsers";
import Chat from "../Pages/Chat";
import Dashboard from "../Pages/Dashboard";
import Private from "../Pages/Private";
import MessagesContact from "../Pages/Tables/Messages";
import MessageModal from "../Pages/Tables/Messages/MessageModal";
import RelatorioDeVendas from "../Pages/Tables/RelatorioDeVendas";
import Supports from "../Pages/Tables/Supports";
import SupportModal from "../Pages/Tables/Supports/SupportModal";
import TableUsers from "../Pages/Tables/Users";
import CreateUser from "../Pages/Tables/Users/CreateUser";
import UpdateUser from "../Pages/Tables/Users/UpdateUser";
import Security from "../Security";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Security>
            <Private>
              <Dashboard />
            </Private>
          </Security>
        }
      />
      <Route
        path="/supports"
        element={
          <Security>
            <Private>
              <Supports />
            </Private>
          </Security>
        }
      />
      <Route
        path="/supports/image/:_id"
        element={
          <Security>
            <Private>
              <SupportModal />
            </Private>
          </Security>
        }
      />
      <Route
        path="/contact"
        element={
          <Security>
            <Private>
              <MessagesContact />
            </Private>
          </Security>
        }
      />
      <Route
        path="/contact/:_id"
        element={
          <Security>
            <Private>
              <MessageModal />
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
