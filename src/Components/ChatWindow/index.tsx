import axios from "axios";
import { useEffect, useState } from "react";

import * as C from "./styles";
import { useParams } from "react-router-dom";

interface Props {
  fromSelf: boolean;
  message: string;
}

const ChatWindow = () => {
  const { id } = useParams();
  let idTest = "6342039c475d67215ba08d79";

  const [chatBetween, setChatBetween] = useState<Props[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.post(
        `http://localhost:3333/api/message/getallmessage`,
        {
          from: idTest,
          to: id,
        }
      );
      setChatBetween(data);
    })();
  }, [idTest, id]);

  return (
    <C.Container>
      <C.HeaderChat></C.HeaderChat>
      {chatBetween.map((message, indice) => (
        <C.ChatBody object={message.fromSelf} key={indice}>
          <C.Message object={message.fromSelf}>{message.message}</C.Message>
        </C.ChatBody>
      ))}
    </C.Container>
  );
};

export default ChatWindow;
