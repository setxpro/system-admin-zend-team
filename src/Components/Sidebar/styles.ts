import styled from "styled-components";

import { AiOutlineBarChart, AiOutlineLogout } from "react-icons/ai";
import { MdAttachMoney, MdContactMail } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BsClipboardCheck, BsChatLeftDots } from "react-icons/bs"; // TO-DO - cli
import { HiOutlineSupport } from "react-icons/hi";
import { RiFolderUserLine } from "react-icons/ri"; // Clients

export const DashboardIcon = styled(AiOutlineBarChart)`
  color: #fff;
  font-size: 1.5rem;
`;
export const ContactIcon = styled(MdContactMail)`
  color: #fff;
  font-size: 1.5rem;
`;
export const LogoutIcon = styled(AiOutlineLogout)`
  color: #fff;
  font-size: 1.5rem;
`;
export const FinanceIcon = styled(MdAttachMoney)`
  color: #fff;
  font-size: 1.5rem;
`;
export const UsersIcon = styled(FiUsers)`
  color: #fff;
  font-size: 1.5rem;
`;
export const TodoIcon = styled(BsClipboardCheck)`
  color: #fff;
  font-size: 1.5rem;
`;
export const ChatIcon = styled(BsChatLeftDots)`
  color: #fff;
  font-size: 1.5rem;
`;
export const SupportIcon = styled(HiOutlineSupport)`
  color: #fff;
  font-size: 1.5rem;
`;
export const ClientIcon = styled(RiFolderUserLine)`
  color: #fff;
  font-size: 1.5rem;
`;

export const Container = styled.div`
  height: 100vh;
  width: 245px; /** OBS */
  transition: 1s;
  background: #283046;
`;
export const Logo = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #cfd1d5;
    white-space: nowrap;
  }
`;
export const Nav = styled.nav`
  margin-top: 1rem;
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;

    a {
      color: #cfd1d5;
      text-decoration: none;
      padding: 10px 10px;

      transition: 1s;
      white-space: nowrap;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        background: #9999;
      }
    }
  }
`;
