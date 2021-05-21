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
`;

export const FirstContainer = styled.div`
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

export const SecondContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  background-color: #007688;
  display: flex;
  font-size: 10px;
  justify-content: space-around;
  flex-direction: column;
  height: 205px;
  margin-top: -3px;
  width: 100%;
`;

export const ImgSecondContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;

  img {
    border-radius: 50px;
    width: 80px;
  }
`;

export const ParagraphSecondContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-size: 12px;
  justify-content: space-around;
  margin: -30px auto 0;
  width: 100%;
`;

export const ThirdContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -3px;
  width: 100%;
  h3 {
    color: #007688;
    font-size: 25px;
  }
`;

export const FirstThirdContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: center;
  margin-top: -3px;
  width: 100%;
  p {
    color: #657979;
    font-size: 18px;
    margin: 15px;
  }
`;

export const TitleThirdContainer = styled.div`
  box-sizing: border-box;
  align-items: flex-end;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: end;
  width: 90%;
  small {
    color: #003239;
    font-size: 10px;
    margin: 5px 10px 0;
  }
  p {
    color: #007688;
    font-size: 30px;
    margin: 5px 10px;
  }
`;

export const CoursesThirdContainer = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  color: #007688;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  text-align: center;
  width: 80%;
`;

export const FourthContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    width: 100%;
  }
`;

export const ContentFourthContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  background-color: #007688;
  color: #fff;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  text-align: left;
  margin-top: -6px;
  padding: 15px;
  width: 100%;
`;

export const FifthContainer = styled.div`
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

export const SixthContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: #007688;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 25px 0;
  width: 100%;
  div {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
  }
  img {
    margin: 20px;
    width: 100px;
  }
`;

export const SeventhContainer = styled.div`
  align-items: center;
  background-color: #007688;
  box-sizing: border-box;
  color: #fff;
  justify-content: center;
  display: flex;
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

export const EighthContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: #007688;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    img {
      width: 120px;
      margin: 25px;
    }
  }
`;
