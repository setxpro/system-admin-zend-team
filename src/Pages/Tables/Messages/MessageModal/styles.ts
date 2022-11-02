import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentArea = styled.div`
  width: 59%;
  margin: auto;
  background: #171d31;
  box-shadow: 1px 2px 15px #000;

  padding: 3rem;
  border-radius: 1rem;

  display: flex;
  align-items: center;

  flex-direction: column;
  gap: 1rem;

  h1 {
    padding: 1rem 0;
    color: #fff;
    font-weight: 400;
  }

  button {
    padding: 0.5rem 3rem;
    border-radius: 8px;
    background: cyan;
    border: 0;

    transition: 0.6s;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
`;
export const Content = styled.div`
  padding: 1em;
  width: 89%;
  margin: auto;
  background: #283046;
  box-shadow: 1px 2px 15px #000;
  border-radius: 1rem;
  color: #fff;

  span {
    color: #999;
    border-bottom: 2px solid cyan;
  }
`;
