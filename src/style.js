import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0;
`;

export const HeaderNav = styled.header`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  width: 100%;
  .fas {
    color: #00b4bf;
    font-size: 30px;
  }
`;

export const ContainerButton = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`;

export const BarButton = styled.button`
  border: none;
  background-color: transparent;
  overflow: hidden;
`;

export const Menu = styled.ul`
  color: #00b4bf;
  display: flex;
  font-size: 25px;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.9);
  list-style: none;
  margin-top: 40px;
  padding: 30px;
  position: absolute;
  li {
    margin: 10px auto;
    width: 100%;
  }
  a {
    color: #00b4bf;
  }
`;
