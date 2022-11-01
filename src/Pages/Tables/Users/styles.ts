import styled from "styled-components";

import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { CgArrowsExchangeAltV } from "react-icons/cg";

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
    button {
      padding: 0.5rem 1rem;
      border-radius: 8px;
      border: none;
      background: #054;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;

      transition: 0.5s;

      &:hover {
        opacity: 0.83;
      }
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

          :nth-child(1) {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            img {
              width: 40px;
              border-radius: 50%;
            }
          }

          :nth-child(2),
          :nth-child(3),
          :nth-child(4) {
            text-align: center;
          }

          :nth-child(5) {
            .area-btn {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 1rem;
            }
          }

          .guest {
            background: #28424a;
            color: #28c76f;
            padding: 0.6rem;
            border-radius: 50%;

            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .owner {
          color: #28c76f;
        }

        .member {
          color: #ff9f43;
        }

        &:nth-child(even) {
          background: #5555;
        }
      }
    }
  }
`;

export const EditIcons = styled(AiOutlineEdit)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;
export const TrashIcons = styled(BsTrash)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;
export const OrdenationIcons = styled(CgArrowsExchangeAltV)`
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
`;
