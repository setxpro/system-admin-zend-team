import styled from "styled-components";

export const Container = styled.div``;
export const HeaderChat = styled.div`
  width: 100%;
  height: 50px;
  background: #171d31;
`;

export const ChatBody = styled.div<{ object: boolean }>`
  height: 100%;
  padding: 5px 5px;
  display: flex;
  justify-content: ${(props) => (props.object ? "flex-start" : "flex-end")};
`;

export const Message = styled.div<{ object: boolean }>`
  width: 40%;
  background: ${(props) => (props.object ? "#AAAA" : "#000")};
  color: ${(props) => (props.object ? "#333" : "#DDDD")};
  color: #fff;

  padding: 5px 3px;
  border-radius: 9px;
  margin-top: ${(props) => (props.object ? "" : "5px")};
`;
