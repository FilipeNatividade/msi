import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #007688;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 25px 0;
  width: 100%;
  h2 {
    margin: 20px auto;
    width: 90%;
    text-align: center;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
  }
  input {
    height: 45px;
    margin-bottom: 20px;
    width: 100%;
  }
  textarea {
    height: 150px;
    width: 80%;
  }
`;

export const CoursesAvailable = styled.button`
  background-color: #ff4d9a;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  padding: 5px 15px;
`;