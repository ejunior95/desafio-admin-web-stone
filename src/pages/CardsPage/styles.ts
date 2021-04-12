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
    height: 110vh;
    z-index: -1;
    }
  
    .bloco-detalhes-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 23%;
    padding-top: 6vh;
    padding-bottom: 6vh;
    height: 100%;
    width: 100%;
    border: 1px solid #30363D;
    border-radius: 10px;
  }

  .titulo {
    color: #ffffff;
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
    margin-top: 65%;
    margin-right: 2%;
    z-index: -1;
  }
  
  .bloco-detalhes-info {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 50vh;
    border: 1px solid #30363D;
    border-radius: 10px;
  }

  .titulo {
    color: #ffffff;
  }
}
`;
