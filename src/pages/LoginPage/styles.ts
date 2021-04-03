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
  width: 80vh;
  height: 50vh;

  .TituloLogin,
  .SubtituloLogin {
      color: #ffffff;
      text-align: center;
      padding-top: 1%;
  }

  .ContainerInputs {
    width: 80%;
    padding-top: 5vh;
    padding-bottom: 2vh;
  }
`;
