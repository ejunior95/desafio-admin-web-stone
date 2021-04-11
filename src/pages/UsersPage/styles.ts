import styled from 'styled-components';

export const Container = styled.div`
    /* Media query para exibição em desktops */

    @media(min-width: 1025px) {
    .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    right: 0;
    top: 0;
    width: 70%;
    margin-right: 2%;
    height: 95vh;
    z-index: -1;
    }
  
    .bloco-detalhes-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 23%;
    height: 100%;
    width: 100%;
    border: 1px solid #30363D;
    border-radius: 10px;
    }

    .container-text-detalhes-info {
      width: 50%;
      height: 100%;
      color: #ffffff;
    }

    .nome-detalhes-info {
      font-size: 300%;
      margin-top: 20px;
      margin-left: 20px;
    }
    .email-detalhes-info {
      margin-left: 22px;
    }
    .data-nascimento-detalhes-info {
      margin-left: 22px;
    }
    .salario-base-detalhes-info {
      margin-left: 22px;
    }
}

    /* Media query para exibição mobile (tablet e celular) */

    @media(max-width: 1024px) {
    
      .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    right: 0;
    top: 0;
    width: 95%;
    margin-right: 2%;
    height: 100vh;
    z-index: -1;
  }
  
  .bloco-detalhes-info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 70%;
    width: 100%;
    height: 60vh;
    border: 1px solid #30363D;
    border-radius: 10px;
  }
}
`;
