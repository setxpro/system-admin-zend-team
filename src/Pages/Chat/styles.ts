import styled from "styled-components";

import { MdDonutLarge, MdMoreVert } from "react-icons/md";
import { BsChatLeftText, BsSearch } from "react-icons/bs";

export const Container = styled.div`
  width: 99%;
  height: calc(100vh - 86px);
  margin: auto;
  background: #283046;

  display: flex;

  padding: 5px;
`;

export const ChatSidebar = styled.div`
  width: 35%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #5555;
`;
export const SidebarHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  .header-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
  .header-buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const DonutIcon = styled(MdDonutLarge)`
  color: #eee;
  font-size: 1.3rem;
  cursor: pointer;
`;
export const MoreIcon = styled(MdMoreVert)`
  color: #eee;
  font-size: 1.3rem;
  cursor: pointer;
`;
export const ChatIcon = styled(BsChatLeftText)`
  color: #eee;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const SidebarSearch = styled.div`
  border-bottom: 1px sold #5555;
  padding: 5px 15px;

  .search-area {
    border: 1px solid #fff;
    height: 40px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;

    input {
      flex: 1;
      border: 0;
      background: transparent;
      outline: none;
      color: #fff;
      font-size: 1rem;
    }
  }
`;

export const SearchIcon = styled(BsSearch)`
  color: #eee;
  font-size: 1.3rem;
  cursor: pointer;
`;
export const SidebarChatList = styled.div`
  background: #171d31;

  a {
    text-decoration: none;
  }

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #6666;
  }

  .active {
    background: #aaaa;
  }
`;

export const ContentChat = styled.div`
  flex: 1;
`;
