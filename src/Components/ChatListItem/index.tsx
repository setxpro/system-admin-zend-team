import React from "react";

import * as C from "./styles";

interface PropsChatList {
  _id: string;
  username: string;
  email: string;
  avatarImage: string;
}

interface Props {
  items: PropsChatList;
  onClick: () => void;
  active: boolean;
}

const ChatListItem = ({ items, onClick, active }: Props) => {
  return (
    <C.Container onClick={onClick} className={active ? "active" : ""}>
      <img src="https://github.com/setxpro.png" alt="avatar" />
      <div className="chat-list-lines">
        <div className="chat-list-line">
          <div className="chat-list-name">{items.username}</div>
          <div className="chat-list-date">19:00</div>
        </div>
        <div className="chat-list-line">
          <div className="last-message">
            <p>
              Olá, meu amigo!Olá, meu amigo!Olá, meu amigo!Olá, meu amigo!Olá,
              meu amigo!Olá, meu amigo!Olá, meu amigo!Olá, meu amigo!Olá, meu
              amigo!Olá, meu amigo!Olá, meu amigo!Olá, meu amigo!Olá, meu
              amigo!Olá, meu amigo!Olá, meu amigo!Olá, meu amigo!Olá, meu amigo!
            </p>
          </div>
        </div>
      </div>
    </C.Container>
  );
};

export default ChatListItem;
