import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChatIntro from "../../Components/ChatIntro";
import ChatListItem from "../../Components/ChatListItem";

import * as C from "./styles";

interface PropsChatList {
  _id: string;
  username: string;
  email: string;
  avatarImage: string;
}

const Chat = ({ children }: { children: ReactNode }) => {
  const [chatList, setChatList] = useState<PropsChatList[]>([]);
  const [activeChat, setActiveChat] = useState<any>({});

  let idTest = "6342039c475d67215ba08d79";

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `http://localhost:3333/api/auth/allusers/${idTest}`
      );
      setChatList(data);
      setActiveChat({ _id: data[0]._id });
    })();
  }, [idTest]);

  return (
    <C.Container>
      <C.ChatSidebar>
        <C.SidebarHeader>
          <img
            src="https://github.com/setxpro.png"
            alt="avatar"
            className="header-avatar"
          />
          <div className="header-buttons">
            <C.DonutIcon /> <C.ChatIcon /> <C.MoreIcon />
          </div>
        </C.SidebarHeader>
        <C.SidebarSearch>
          <div className="search-area">
            <C.SearchIcon />
            <input type="text" placeholder="Procurar usuário" />
          </div>
        </C.SidebarSearch>
        <C.SidebarChatList>
          {chatList.map((item, id) => (
            <Link to={`/chat/${item._id}`} key={id}>
              <ChatListItem
                items={item}
                active={activeChat._id === chatList[id]._id}
                onClick={() => setActiveChat(chatList[id])}
              />
            </Link>
          ))}
        </C.SidebarChatList>
      </C.ChatSidebar>
      <C.ContentChat>
        {activeChat._id === undefined && <ChatIntro />}
        {activeChat._id !== undefined && children}
      </C.ContentChat>
    </C.Container>
  );
};

export default Chat;
