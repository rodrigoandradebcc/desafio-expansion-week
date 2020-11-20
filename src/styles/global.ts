import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #313131;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: roboto;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5 , h6 {
    font-family: 'Nova Round', cursive;
    color: #fff;
  }
`;
