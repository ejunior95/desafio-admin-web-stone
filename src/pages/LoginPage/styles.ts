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
  .titulo-login,
  .subtitulo-login {
      color: #ffffff;
      text-align: center;
      padding-top: 1%;
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
`;
