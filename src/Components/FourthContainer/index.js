import { Container, CoursesAvailable, ContentFourthContainer } from "./style";

const FourthContainer = () => {
  return (
    <Container>
      <img src="images/jorge.svg" alt="jorge" />
      <ContentFourthContainer>
        <h2>Conheça o CEO da MSI</h2>
        <h3>
          Jorge Duro, PhD <i class="fab fa-linkedin"></i>
        </h3>
        <p>
          Graduado em Administração Pública e de Empresas pela UFRGS , Mestre em
          Administração pela PUC-Rio e Doutor pela PUC-Rio. Diretor da DataCorp
          Mercadata do Brasil Ltda. Consultor há mais de vinte anos tendo como
          clientes Essilor do Brasil (Varilux) , TV Globo, CEG, BR
          Distribuidora, FURNAS, BNDES, Oi , Peugeot , ARMCO-STACO, Petróleo
          Ipiranga, Zamboni Distribuidora Ortobom e Embelleze”. Foi Gerente
          Comercial e Gestor de Marketing em empresas nacionais e
          multinacionais. Autor dos livros “Decidir ou Não Decidir”, “Marketing
          para Não Marqueteiros”, “Mitos Corporativos – O que os MBAs Não
          Ensinam”; “Desperte o Empreendedor em Você” e “Gestão de Mudanças”.
          Atualmente é Coordenador Acadêmico do MBA de Gestão Comercial e de
          Vendas do IAG PUC Rio.
        </p>

        <CoursesAvailable>
          <a href="#contat">Agendar entrevista</a>
        </CoursesAvailable>
      </ContentFourthContainer>
    </Container>
  );
};
export default FourthContainer;
