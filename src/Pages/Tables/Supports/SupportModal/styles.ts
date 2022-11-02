import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 40%;
  }

  button {
    padding: 0.5rem 3rem;
    border-radius: 1rem;
    background: cyan;
    border: none;

    transition: 0.5s;
    cursor: pointer;
    &:hover {
      opacity: 0.81;
    }
  }
`;
