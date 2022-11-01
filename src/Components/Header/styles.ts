import styled from "styled-components";

export const Container = styled.div`
  width: 99%;
  height: 70px;
  margin: auto;
  background: #283046;

  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
`;

export const ContentAreaLeft = styled.div``;
export const ContentAreaRight = styled.div``;
export const ContntAreaAvatarAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .name-assigment {
    h3 {
      color: #cacdd0;
      font-weight: 500;
      text-align: end;
    }
    p {
      color: #b0b3ba;
    }
  }
  .avatar {
    position: relative;
    img {
      width: 60px;
      border-radius: 50%;
    }

    &::after {
      content: "";
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 3px solid #283046;
      position: absolute;
      bottom: 5px;
      right: 5px;
      background: #0f0;
    }
  }
`;
