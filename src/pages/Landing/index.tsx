import React from 'react';

import { Wrap, Menu, Logo, Content, BtnGroup, Color1 } from './styles';

const Landing: React.FC = () => {
  return (
    <Wrap>
      <header>
        <Logo>LOGO</Logo>
        <Menu>
          <ul>
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/">
                O que é?
              </a>
            </li>
            <li>
              <a href="/">
                Como melhorar?
              </a>
            </li>
          </ul>
        </Menu>
      </header>

      <Content>
        <h1>Comunicação</h1>
        <p> A habilidade da boa comunicação, de perguntar, ouvir e estabelecer um relacionamento interpessoal agradável é o que mais se busca quando falamos em soft skill. </p>
        <BtnGroup>
          <Color1 href="/">
            <strong>VER MAIS</strong>
          </Color1>
          {/* <a href="/">
            HAHA2
          </a> */}
        </BtnGroup>
      </Content>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          width: "100%",
          bottom: "-140px",
          color: "#fff",
          opacity: 1
        }}
      >
        <path fill="#ffffff" fillOpacity="1" d="M0,96L80,90.7C160,85,320,75,480,96C640,117,800,171,960,165.3C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
      </svg>

    </Wrap>
  );
};

export default Landing;
