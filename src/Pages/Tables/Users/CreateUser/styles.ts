import styled from "styled-components";

export const Container = styled.div`
  width: 99%;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ContentHeader = styled.div`
  height: 30px;
  display: flex;
  align-items: center;

  h1 {
    color: #eee;
  }
`;
export const ContenBody = styled.div`
  height: calc(100vh - 136px);
  background: #283046;
  display: flex;
  align-items: center;

  form {
    width: 50%;
    margin: auto;

    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    .content-one {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      input[type="email"] {
        width: 100%;
      }
      input[type="text"] {
      }
    }

    .input-group {
      width: 100%;
      input {
        width: 100%;
        border: 1px solid #5555;
        outline: none;
        padding: 0.8rem 3px;
        background: transparent;
        color: #fff;

        font-size: 1rem;
      }

      select {
        outline: none;
        padding: 0.7rem 2rem;
        background: transparent;
        color: #555;
      }
    }
    .input-group-file-btn {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      input[type="file"] {
        color: #fff;
        border: 1px solid #5555;
        outline: none;
        padding: 0.8rem 3px;
        background: transparent;
      }

      button {
        width: 90px;
        padding: 0.2rem 1rem;
      }
    }
    .send-btn {
      width: calc(60% + 1vmin);
      padding: 0.6rem 5px;
      border-radius: 8px;
      background: #059;
      border: none;
      color: #fff;

      transition: 0.5s;

      cursor: pointer;

      &:hover {
        background: #056;
      }
    }
  }
`;
