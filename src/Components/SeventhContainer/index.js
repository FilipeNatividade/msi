import { Container, CoursesAvailable } from "./style";

const SeventhContainer = () => {
  return (
    <Container>
      <h2>Preencha o formulário a seguir para entrar em contato conosco</h2>

      <div>
        <input placeholder="Nome" /> <input placeholder="Email" />{" "}
        <input placeholder="Whatsapp" />{" "}
        <input placeholder="Curso de interesse" />
      </div>
      <textarea placeholder="Qual a sua dúvida?" />
      <CoursesAvailable>ENVIAR</CoursesAvailable>
    </Container>
  );
};
export default SeventhContainer;
