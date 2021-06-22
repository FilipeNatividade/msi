import {
  Container,
  ImgSecondContainer,
  ParagraphSecondContainer,
} from "./style";

const SecondContainer = () => {
  return (
    <Container>
      <h2>O QUE VOCÊ GOSTARIA DE APRENDER HOJE?</h2>
      <ImgSecondContainer>
        <img
          src="./images/icon_entrepreneurship.svg"
          alt="icon_entrepreneurship"
        />
        <img src="./images/icon_sales.svg" alt="icon_sales" />

        <img src="./images/icon_menagement.svg" alt="icon_menagement" />
      </ImgSecondContainer>
      <ParagraphSecondContainer>
        <p>Empreendedorismo</p>
        <p>Vendas</p>
        <p>Gestão de Negocios</p>
      </ParagraphSecondContainer>
    </Container>
  );
};
export default SecondContainer;
