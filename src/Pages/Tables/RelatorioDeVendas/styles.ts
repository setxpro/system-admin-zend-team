import styled from "styled-components";

export const Container = styled.div`
  width: 99%;
  height: calc(100vh - 86px);
  margin: auto;
  background: #283046;
`;
export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;

  .date-area {
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 1rem 1rem;
  }

  .MuiFormControl-root {
    border: 1px solid #fff;
  }
  .MuiInputLabel-root {
    color: #fff;
    background: #283046;
  }

  .MuiInputLabel-outlined {
    outline: 0;
  }

  .MuiInputLabel-formControl {
    background: #283046;
  }
  .MuiInputLabel-animated {
    background: #283046;
  }

  .MuiFormLabel-colorPrimary {
    background: #283046;
    padding: 0 10px;
  }

  .MuiButtonBase-root {
    color: #fff;
  }
  .MuiInputBase-input {
    color: #fff;
  }

  h1 {
    color: #d0d2d6;
    font-size: 2em;
    padding: 0 1rem;
  }
`;
