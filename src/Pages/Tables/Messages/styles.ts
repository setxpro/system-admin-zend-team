import styled from "styled-components";

import { BsTrash, BsCardImage, BsInfoCircle } from "react-icons/bs";

export const Container = styled.div`
  height: calc(100vh - 86px);
  width: 99%;
  margin: auto;
  background: #283046;
  /* box-shadow: 1px 2px 15px #000; */
`;
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  .input-area {
    width: 500px;
    input {
      width: 100%;
      padding: 0.5rem 3px;
      border-radius: 8px;
      border: 1px solid #555;
      background: transparent;
      color: #fff;
      font-size: 1rem;
      outline: none;
    }
  }

  .btn-register {
    h2 {
      color: #fff;
    }
  }
`;
export const Content = styled.div`
  table {
    width: 100%;

    thead {
      tr {
        th {
          padding: 0.3rem;
          color: #fff;
          background-color: #171d31;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 0.3em;
          color: #fff;
          text-align: center;

          &:nth-child(4) {
            width: 200px;
            p {
              width: 200px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
`;

export const PictureIcon = styled(BsCardImage)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;
export const TrashIcons = styled(BsTrash)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;
export const MoreInfoIcon = styled(BsInfoCircle)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;
