import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display:flex;
  align-items:center;
  justify-content: center;
`;

export const ContainerLogin = styled.div`
  background-color: #30363D;
  border-radius: 10px;
  min-width: 40%;
  min-height: 50%;
  .container-textos {
    padding-top: 5%;
  }
  .titulo-login,
  .subtitulo-login {
      color: #ffffff;
      text-align: center;
  }
  .container-inputs {
    width: 80%;
    margin-left: 15%;
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
