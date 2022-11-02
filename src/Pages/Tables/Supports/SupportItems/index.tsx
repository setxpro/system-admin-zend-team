import axios from "axios";
import { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import { SupportsType } from "../../../../Types/SupportType";
import { PictureIcon, TrashIcons } from "../styles";

type Props = {
  inputFilter: string;
};

const SupportItems = ({ inputFilter }: Props) => {
  const [supports, setSupports] = useState<SupportsType[]>([]);
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
    <tbody>
      {filterData.map((support, indice) => (
        <tr key={indice}>
          <td>{support.type}</td>
          <td>{support.comment}</td>
          <td>
            <Link to={`/supports/image/${support._id}`}>
              <PictureIcon />
            </Link>
          </td>
          <td>
            <div className="area-btn">
              <TrashIcons onClick={() => remove(support._id)} />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default memo(SupportItems);
