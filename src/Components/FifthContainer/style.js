import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #edfffe;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px 0;
  width: 100%;
  button {
    margin: 0 auto;
  }
`;

export const ContentFifthContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  box-sizing: border-box;
  color: #657979;
  display: flex;
  flex-direction: column;
  height: 490px;
  justify-content: space-between;
  margin: 10px auto;
  width: 300px;
  img {
    border-radius: 20px 20px 0 0;
    width: 100%;
  }
  h2 {
    color: #007688;
    margin: 0;
    width: 80%;
  }
  p {
    text-align: left;
    width: 80%;
  }
  div {
    color: #000;
    display: flex;
    font-weight: 500;
    justify-content: space-between;
    width: 80%;
  }
  button {
    border: none;
    background-color: #ff4d9a;
    border-radius: 0 0 20px 20px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    height: 63px;
    overflow: hidden;
    width: 100%;
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
