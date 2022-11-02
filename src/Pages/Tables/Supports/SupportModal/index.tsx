import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as C from "./styles";

const SupportModal = () => {
  const navigate = useNavigate();

  const { _id } = useParams();

  const [pictureSupport, setPictureSupport] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/support/${_id}`
      );

      setPictureSupport(data.support.screenshot);
    })();
  }, []);
  return (
    <C.Container>
      <img src={pictureSupport} alt="asc" />
      <button onClick={() => navigate(-1)}>Voltar</button>
    </C.Container>
  );
};

export default SupportModal;
