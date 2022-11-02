import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as C from "./styles";

type SupportsType = {
  _id: string;
  type: string;
  screenshot: string;
  comment: string;
};

const Supports: React.FC = () => {
  const [supports, setSupports] = useState<SupportsType[]>([]);

  const [inputFilter, setInputFilter] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/support`);
      setSupports(data.support);
    })();
  }, []);

  const remove = async (_id: string) => {
    let message = window.confirm("Deseja realmente deletar esse item ?");
    if (!message) {
      return;
    }

    const { data } = await axios.delete(
      `${process.env.REACT_APP_URL}/support/${_id}`
    );
    const removeItem = supports.filter((i) => i._id !== _id);
    setSupports(removeItem);
    return data;
  };

  const filterData = supports.filter((i) => i.type.startsWith(inputFilter));

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
          <tbody>
            {filterData.map((support, indice) => (
              <tr key={indice}>
                <td>{support.type}</td>
                <td>{support.comment}</td>
                <td>
                  <Link to={`support/${support._id}`}>
                    <C.PictureIcon />
                  </Link>
                </td>
                <td>
                  <div className="area-btn">
                    <C.TrashIcons onClick={() => remove(support._id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </C.Content>
    </C.Container>
  );
};

export default Supports;
