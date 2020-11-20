import styled from 'styled-components';

import comunic from '../../assets/img/com.jpeg';

export const Wrap = styled.div`
  background: rgba(0, 0, 0, 0.5) url(${comunic}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
  background-mix-blend-mode: overlay;

  .wave{
    position: absolute;
    width: 100%;
    bottom: -140px;
    color: #fff;
    opacity: 1;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 25px 80px;
    background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.6));
  }
`;

export const Menu = styled.div`
  float: right;
  margin-top: 5px;

  ul li{
    display: inline;
  }

  ul li a{
    text-decoration: none;
    font-size: 16px;
    color: #fff;
    margin: 0 25px;
    font-weight: 300;
    letter-spacing: 1px;
  }
`;

export const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  float: left;
`;

export const Content = styled.div`
  max-width: 55%;
  padding: 200px 80px 0;
  color: #fff;

  h1{
    font-size: 48px;
  }

  p{
    font-size: 20px;
    padding: 25px 0;
    font-weight: 300;
  }
`;

export const BtnGroup = styled.div`
  margin-top: 45px;

  a{
    display: inline-block;
    padding: 15px 45px;
    text-decoration: none;
    color: #fff;
    border-radius: 50px;
  }
`;

export const Color1 = styled.a`
  background-color: #ffc107;
`;
