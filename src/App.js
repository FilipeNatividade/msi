import { useState } from "react";
import {
  Container,
  HeaderNav,
  ContainerButton,
  BarButton,
  Menu,
  FirstContainer,
  ContentFirstContainer,
  CoursesAvailable,
  SecondContainer,
  ImgSecondContainer,
  ParagraphSecondContainer,
  ThirdContainer,
  FirstThirdContainer,
  TitleThirdContainer,
  CoursesThirdContainer,
  FourthContainer,
  ContentFourthContainer,
  FifthContainer,
  ContentFifthContainer,
  SixthContainer,
  SeventhContainer,
  EighthContainer,
} from "./style";
const App = () => {
  const [menuBar, setMenuBar] = useState(false);

  const handleMenu = () => {
    setMenuBar(!menuBar);
  };

  return (
    <Container>
      <HeaderNav>
        <img src="./images/logo.svg" alt="logo" />
        <ContainerButton>
          <BarButton onClick={handleMenu}>
            <i class="fas fa-bars"></i>
          </BarButton>
          {menuBar && (
            <Menu>
              <li>
                <a>Soluções</a>
              </li>
              <li>
                <a>Sobre</a>
              </li>
              <li>
                <a>Cursos</a>
              </li>
              <li>
                <a>Clientes</a>
              </li>
              <li>
                <a>Parceiros</a>
              </li>
              <li>
                <a>Contato</a>
              </li>
            </Menu>
          )}
        </ContainerButton>
      </HeaderNav>
      <FirstContainer>
        <ContentFirstContainer>
          <h2>MERCADATA SELLING INSTITUTE // ESCOLA DE NEGÓCIOS</h2>
          <p>Aprenda a vender com os melhores especialistas do mercado</p>
          <CoursesAvailable>Cursos Disponíveis</CoursesAvailable>
        </ContentFirstContainer>
      </FirstContainer>
      <SecondContainer>
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
      </SecondContainer>
      <ThirdContainer>
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
            guiar profissionais de vendas, empreendedores e gestores de pequenos
            e médios negócios ao sucesso.
          </p>
        </FirstThirdContainer>
        <h3>Modalidades</h3>
        <CoursesThirdContainer>
          <p>Cursos online</p>
          <p>Cursos híbridos</p>
          <p>Cursos presenciais</p>
        </CoursesThirdContainer>
      </ThirdContainer>
      <FourthContainer>
        <img src="images/jorge.svg" alt="jorge" />
        <ContentFourthContainer>
          <h2>Conheça o CEO da MSI</h2>
          <h3>
            Jorge Duro, PhD <i class="fab fa-linkedin"></i>
          </h3>
          <p>
            Graduado em Administração Pública e de Empresas pela UFRGS , Mestre
            em Administração pela PUC-Rio e Doutor pela PUC-Rio. Diretor da
            DataCorp Mercadata do Brasil Ltda. Consultor há mais de vinte anos
            tendo como clientes Essilor do Brasil (Varilux) , TV Globo, CEG, BR
            Distribuidora, FURNAS, BNDES, Oi , Peugeot , ARMCO-STACO, Petróleo
            Ipiranga, Zamboni Distribuidora Ortobom e Embelleze”. Foi Gerente
            Comercial e Gestor de Marketing em empresas nacionais e
            multinacionais. Autor dos livros “Decidir ou Não Decidir”,
            “Marketing para Não Marqueteiros”, “Mitos Corporativos – O que os
            MBAs Não Ensinam”; “Desperte o Empreendedor em Você” e “Gestão de
            Mudanças”. Atualmente é Coordenador Acadêmico do MBA de Gestão
            Comercial e de Vendas do IAG PUC Rio.
          </p>

          <CoursesAvailable>Agendar entrevista</CoursesAvailable>
        </ContentFourthContainer>
      </FourthContainer>

      <FifthContainer>
        <ContentFifthContainer>
          <img src="./images/sales.svg" alt="sales" />
          <h2>Vendedor 4.0</h2>
          <p>
            Como as novas tecnologias e redes sociais podem ser aproveitadas
            pelo profissional de vendas.
          </p>
          <div>
            <small>ONLINE</small>
            <small>30 HORAS</small>
          </div>
          <button>Tenho interesse</button>
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
          <button>Tenho interesse</button>
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
          <button>Tenho interesse</button>
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
          <button>Tenho interesse</button>
        </ContentFifthContainer>
        <ContentFifthContainer>
          <img src="./images/club.svg" alt="club" />
          <h2>Clube da Prosperidade</h2>
          <p>
            Workshop da Prosperidade: como se posicionar e aumentar seu
            networking e desenvolver seu negócio?
          </p>
          <div>
            <small>ONLINE</small>
            <small>80 HORAS</small>
          </div>
          <button>Tenho interesse</button>
        </ContentFifthContainer>
        <CoursesAvailable>Mais cursos</CoursesAvailable>
      </FifthContainer>
      <SixthContainer>
        <h2>Clientes</h2>
        <div>
          <img src="./images/puc.svg" alt="puc" />
          <img src="./images/iag.svg" alt="iag" />
          <img src="./images/embelleze.svg" alt="embelleze" />
          <img src="./images/bravet.svg" alt="bravet" />
          <img src="./images/fabrimar.svg" alt="fabrimar" />
          <img src="./images/ediouro.svg" alt="ediouro" />
          <img src="./images/supergasbras.svg" alt="supergasbras" />
          <img src="./images/essilor.svg" alt="essilor" />
          <img src="./images/ortobom.svg" alt="ortobom" />
          <img src="./images/rica.svg" alt="rica" />
        </div>
      </SixthContainer>
      <SeventhContainer>
        <h2>Preencha o formulário a seguir para entrar em contato conosco</h2>

        <div>
          <input placeholder="Nome" /> <input placeholder="Email" />{" "}
          <input placeholder="Whatsapp" />{" "}
          <input placeholder="Curso de interesse" />
        </div>
        <textarea placeholder="Qual a sua dúvida?" />
      </SeventhContainer>
      <EighthContainer>
        <h2>Nossos parceiros</h2>
        <div>
          <img src="./images/academia_digital.svg" alt="academia_digital" />
          <img src="./images/bom_papo.svg" alt="bom_papo" />
          <img
            src="./images/clube_de_prosperidade.svg"
            alt="clube_de_prosperidade"
          />
        </div>
      </EighthContainer>
    </Container>
  );
};

export default App;
