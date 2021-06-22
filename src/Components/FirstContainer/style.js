import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-image: url("./images/first_background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  height: 205px;
  width: 100%;
`;

export const ContentFirstContainer = styled.div`
  background-color: rgba(00, 76, 88, 0.6);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  justify-content: space-around;
  padding: 5px;
  width: 300px;
  h2 {
    color: #8ef5fa;
    font-size: 10px;
    margin: 0;
  }
  p {
    margin: 0;
  }
  button {
    width: 200px;
  }
`;

export const CoursesAvailable = styled.button`
  background-color: #ff4d9a;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 15px;
  overflow: hidden;
`;
