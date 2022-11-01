import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../../../Types/User";

import * as C from "./styles";

const TableUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [ordination, setOrdination] = useState(1);
  const [columnOrdination, setColumnOrdination] = useState("");

  const getUsers = useCallback(async () => {
    const { data } = await axios.get("https://app-cpmy.herokuapp.com/users");
    console.log(data);
    setUsers(data.users);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const deleteUser = async (_id: string) => {
    const { data } = await axios.delete(
      `https://app-cpmy.herokuapp.com/user/${_id}`
    );
    let remove = users.filter((i) => i._id !== _id);
    setUsers(remove);
    return data;
  };

  // Ordination

  const handleOrdination = (fieldName: string) => {
    setOrdination(-ordination);
    setColumnOrdination(fieldName);
  };

  let list = users.sort((a: any, b: any) => {
    return a[columnOrdination] < b[columnOrdination] ? -ordination : ordination;
  });

  return (
    <C.Container>
      <C.HeaderContent>
        <div></div>
        <div className="input-area">
          <input type="text" name="search" placeholder="Search" />
        </div>
        <div className="btn-register">
          <Link to="/create-users">
            <button>Cadastrar</button>
          </Link>
        </div>
      </C.HeaderContent>
      <C.Content>
        <table>
          <thead>
            <tr>
              <th>
                Nome{" "}
                <C.OrdenationIcons onClick={() => handleOrdination("name")} />
              </th>
              <th>
                E-mail
                <C.OrdenationIcons onClick={() => handleOrdination("email")} />
              </th>
              <th>
                Cargo{" "}
                <C.OrdenationIcons onClick={() => handleOrdination("role")} />
              </th>
              <th>
                Atribuição{" "}
                <C.OrdenationIcons
                  onClick={() => handleOrdination("assignment")}
                />
              </th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {list.map((user, indice) => {
              return (
                <tr key={indice}>
                  <td>
                    {user.avatar === "" && <div className="guest">BG</div>}
                    {user.avatar && (
                      <img src={`${user.avatar}`} alt={user._id} />
                    )}
                    {user.name}
                  </td>
                  <td>{user.email}</td>
                  <td
                    className={
                      user.role === "Owner"
                        ? "owner"
                        : "" || user.role === "Member"
                        ? "member"
                        : ""
                    }
                  >
                    {user.role}
                  </td>
                  <td>{user.assignment}</td>
                  <td>
                    <div className="area-btn">
                      <Link to={`/user-update/${user._id}`}>
                        <C.EditIcons />
                      </Link>
                      <C.TrashIcons onClick={() => deleteUser(user._id)} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </C.Content>
    </C.Container>
  );
};

export default TableUsers;
