import { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import * as C from "./styles";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <C.Container>
      <C.ContentAreaLeft> {/** next implements */} </C.ContentAreaLeft>
      <C.ContentAreaRight>
        <C.ContntAreaAvatarAndName>
          <div className="name-assigment">
            <h3>{user?.name}</h3>
            <p>{user?.assignment}</p>
          </div>
          <div className="avatar">
            <img src={`${user?.avatar}`} alt="avatar" />
          </div>
        </C.ContntAreaAvatarAndName>
      </C.ContentAreaRight>
    </C.Container>
  );
};

export default Header;
