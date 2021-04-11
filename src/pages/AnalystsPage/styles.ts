import styled from 'styled-components';

export const Container = styled.div`

/* Media query para exibição em desktop */

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
    margin-top: 20%;
    margin-right: 2%;
    height: 100vh;
    z-index: -1;
  }
}

/* Media query para exibição em aparelhos mobile (tablet e celular) */

@media(max-width: 1024px) {
    .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    right: 0;
    top: 0;
    width: 90%;
    margin-top: 25%;
    margin-right: 5%;
    z-index: -1;
  }
}
`;
