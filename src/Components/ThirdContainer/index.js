import {
  Container,
  FirstThirdContainer,
  TitleThirdContainer,
  CoursesThirdContainer,
} from "./style";

const ThirdContainer = () => {
  return (
    <Container>
      <FirstThirdContainer>
        <TitleThirdContainer>
          <small>CONHEÇA</small>
          <p>
            Mercadata <br /> Selling <br /> Institute
          </p>
        </TitleThirdContainer>
        <p>
          A MSI (Mercadata Selling Institute) é a Escola de Negócios do Grupo
          Mercadata. Unimos a expertise da nossa equipe e a experiência que a
          empresa adquiriu em todos os seus 30 anos de atuação no mercado para
          guiar profissionais de vendas, empreendedores e gestores de pequenos e
          médios negócios ao sucesso.
        </p>
      </FirstThirdContainer>
      <h3>Modalidades</h3>
      <CoursesThirdContainer>
        <p>Cursos online</p>
        <p>Cursos híbridos</p>
        <p>Cursos presenciais</p>
      </CoursesThirdContainer>
    </Container>
  );
};
export default ThirdContainer;
