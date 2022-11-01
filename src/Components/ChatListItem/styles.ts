import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 70px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
  }

  transition: 0.7s;

  &:hover {
    background: #8888;
  }

  .chat-list-lines {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #5555;
    padding-right: 15px;
    margin-left: 15px;
    gap: 5px;

    .chat-list-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .chat-list-name {
        font-size: 17px;
        color: #eee;
      }
      .chat-list-date {
        font-size: 12px;
        color: #9999;
      }

      .last-message {
        font-size: 14px;
        color: #999;
        display: flex;
        width: 100%;

        p {
          width: 250px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0;
        }
      }
    }
  }
`;
