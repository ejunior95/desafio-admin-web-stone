import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  .container-logo {
    width: 100%;
    padding-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    font-size: 50px;
    color: #ffffff;
  }
  .text-logo {
    color: #ffffff;
    padding: 10px;
  }
`;

export const ContainerLogin = styled.div`
  background-color: #30363D;
  border-radius: 10px;
  min-width: 40%;
  min-height: 55%;
  .container-textos {
    margin-left: 10%;
    box-sizing: border-box;
    width: 80%;
    padding-top: 5%;
  }
  .titulo-login,
  .subtitulo-login {
      color: #ffffff;
      text-align: center;
      padding-bottom: 2%;
  }
  .container-inputs {
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 5vh;
    padding-bottom: 2vh;
  }
  .container-button {
    width: 100%;
    padding-top: 2vh;
    display: flex;
    justify-content: center;
  }
`;
