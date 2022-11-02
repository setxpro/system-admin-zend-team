import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as C from "./styles";

const MessageModal = () => {
  const navigate = useNavigate();

  const { _id } = useParams();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/client-message/${_id}`
      );
      setName(data.clientMessage.name);
      setEmail(data.clientMessage.email);
      setPhone(data.clientMessage.phone);
      setMessage(data.clientMessage.message);
    })();
  }, [_id]);

  return (
    <C.Container>
      <C.ContentArea>
        <h1>Mais informações sobre o contato</h1>
        <C.Content>
          <span>Nome</span> : {name}
        </C.Content>
        <C.Content>
          <span>E-mail</span> : {email}
        </C.Content>
        <C.Content>
          <span>Telefone</span> : {phone}
        </C.Content>
        <C.Content>
          <span>Mensagem</span> : {message}
        </C.Content>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </C.ContentArea>
    </C.Container>
  );
};

export default MessageModal;
