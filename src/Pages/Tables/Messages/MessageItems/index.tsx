import axios from "axios";
import { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import { ContactType } from "../../../../Types/ContactType";

import { TrashIcons, MoreInfoIcon } from "../styles";

interface Props {
  inputFilter: string;
}

const MessageItems = ({ inputFilter }: Props) => {
  const [messagesContact, setMesagesContact] = useState<ContactType[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/client-message`
      );
      setMesagesContact(data.clientMessage);
    })();
  }, []);

  const remove = async (_id: string) => {
    let message = window.confirm("Deseja realmente deletar esse item ?");
    if (!message) {
      return;
    }

    const { data } = await axios.delete(
      `${process.env.REACT_APP_URL}/client-message/${_id}`
    );
    const removeItem = messagesContact.filter((i) => i._id !== _id);
    setMesagesContact(removeItem);
    return data;
  };

  const filterData = messagesContact.filter((i) =>
    i.name.startsWith(inputFilter)
  );

  return (
    <tbody>
      {filterData.map((contact, indice) => (
        <tr key={indice}>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
          <td>
            <p>{contact.message}</p>
          </td>
          <td>
            <div className="area-btn">
              <Link to={`/contact/${contact._id}`}>
                <MoreInfoIcon />
              </Link>
            </div>
          </td>
          <td>
            <div className="area-btn">
              <TrashIcons onClick={() => remove(contact._id)} />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default memo(MessageItems);
