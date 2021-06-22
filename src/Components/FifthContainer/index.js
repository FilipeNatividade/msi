import { Container, ContentFifthContainer, CoursesAvailable } from "./style";

const FifthContainer = () => {
  return (
    <Container>
      <ContentFifthContainer>
        <img src="./images/sales.svg" alt="sales" />
        <h2>Vendedor 4.0</h2>
        <p>
          Como as novas tecnologias e redes sociais podem ser aproveitadas pelo
          profissional de vendas.
        </p>
        <div>
          <small>ONLINE</small>
          <small>30 HORAS</small>
        </div>
        <button>
          <a href="#contat">Tenho interesse</a>
        </button>
      </ContentFifthContainer>
      <ContentFifthContainer>
        <img src="./images/consultative.svg" alt="consultative" />
        <h2>Vendas Consultivas</h2>
        <p>
          O processo de vendas B2B utilizando técnicas spin selling, vendas
          complexas e neurocomonunicação.
        </p>
        <div>
          <small>ONLINE</small>
          <small>40 HORAS</small>
        </div>
        <button>
          <a href="#contat">Tenho interesse</a>
        </button>
      </ContentFifthContainer>
      <ContentFifthContainer>
        <img src="./images/coach.svg" alt="coach" />
        <h2>Gestor de Vendas como Coach</h2>
        <p>
          Desenvolva competências de facilitação, treinamento e coaching para
          times comerciais.
        </p>
        <div>
          <small>ONLINE</small>
          <small>30 HORAS</small>
        </div>
        <button>
          <a href="#contat">Tenho interesse</a>
        </button>
      </ContentFifthContainer>
      <ContentFifthContainer>
        <img src="./images/aggregate.svg" alt="aggregate" />
        <h2>Agregando Propostas de Valor</h2>
        <p>
          Aprenda como transformar a venda de produtos e serviços com valor
          agregado.
        </p>
        <div>
          <small>ONLINE</small>
          <small>30 HORAS</small>
        </div>
        <button>
          <a href="#contat">Tenho interesse</a>
        </button>
      </ContentFifthContainer>
      <ContentFifthContainer>
        <img src="./images/club.svg" alt="club" />
        <h2>Clube da Prosperidade</h2>
        <p>
          Workshop da Prosperidade: como se posicionar e aumentar seu networking
          e desenvolver seu negócio?
        </p>
        <div>
          <small>ONLINE</small>
          <small>80 HORAS</small>
        </div>
        <button>
          <a href="#contat">Tenho interesse</a>
        </button>
      </ContentFifthContainer>
    </Container>
  );
};
export default FifthContainer;
