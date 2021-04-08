import styled from 'styled-components';

export const Container = styled.div`
  
  div {
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  align-items:center;
  justify-content: center;
  width: 20vw;
  padding: 5px;
  border-radius: 50px;
  z-index: 9999;
  }

  h1 {
    font-size: 12px;
    color: #ffffff;
  }

  .sucesso {
    background-color: #44bd32;
  }
  .erro {
    background-color: #c23616;
  }
  .alerta {
    background-color: #e1b12c;
  }
  .icone {
    color: #ffffff;
    font-size: 12px;
    padding-right: 10px;
  }
`;
