import { Container, ContentFirstContainer, CoursesAvailable } from "./style";

const FirstContainer = () => {
  return (
    <Container>
      <ContentFirstContainer>
        <h2>MERCADATA SELLING INSTITUTE // ESCOLA DE NEGÓCIOS</h2>
        <p>Aprenda a vender com os melhores especialistas do mercado</p>
        <CoursesAvailable>
          <a href="#courses">Cursos Disponíveis</a>
        </CoursesAvailable>
      </ContentFirstContainer>
    </Container>
  );
};
export default FirstContainer;
