import { useState } from "react";
import FirstContainer from "./Components/FirstContainer";
import SecondContainer from "./Components/SecondContainer";
import ThirdContainer from "./Components/ThirdContainer";
import FourthContainer from "./Components/FourthContainer";
import FifthContainer from "./Components/FifthContainer";
import SixthContainer from "./Components/SixthContainer";
import SeventhContainer from "./Components/SeventhContainer";
import EighthContainer from "./Components/EighthContainer";

import {
  Container,
  HeaderNav,
  Menu,
  ContainerButton,
  BarButton,
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
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#courses">Cursos</a>
              </li>
              <li>
                <a href="#client">Clientes</a>
              </li>
              <li>
                <a href="#partners">Parceiros</a>
              </li>
              <li>
                <a href="#contat">Contato</a>
              </li>
            </Menu>
          )}
        </ContainerButton>
      </HeaderNav>
      <a name="solution">
        <FirstContainer />
      </a>
      <SecondContainer />
      <a name="about">
        <ThirdContainer />
      </a>
      <FourthContainer />
      <a name="courses">
        <FifthContainer />
      </a>
      <a name="client">
        <SixthContainer />
      </a>
      <a name="contat">
        <SeventhContainer />
      </a>
      <a name="partners">
        <EighthContainer />
      </a>
    </Container>
  );
};

export default App;
