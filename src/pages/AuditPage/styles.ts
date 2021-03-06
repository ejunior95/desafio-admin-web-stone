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
    height: 250vh;
    z-index: -1;
    }
    
    .bloco-detalhes-info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 23%;
    height: 100%;
    width: 100%;
    border: 1px solid #30363D;
    border-radius: 10px;
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
    height: 350vh;
    border: 1px solid #30363D;
    border-radius: 10px;
  }
}
`;
