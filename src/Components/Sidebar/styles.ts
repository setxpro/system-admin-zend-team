import styled from "styled-components";

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
      padding: 5px 10px;

      transition: 1s;
      white-space: nowrap;

      &:hover {
        background: #9999;
      }
    }
  }
`;
