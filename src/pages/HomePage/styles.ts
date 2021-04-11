import styled from 'styled-components';

export const Container = styled.div`

/* Media query para exibição em desktop */

@media(min-width: 1025px) {

  .titulo {
    color: #ffffff;
    margin-bottom: 10px;
  }
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
    flex-wrap: wrap;
    margin-top: 23%;
    height: 100%;
    width: 100%;
    border: 1px solid #30363D;
    border-radius: 10px;
  }
  .bloco-info-users {
    width: 45%;
    height: 50%;
    margin-left: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container-detalhes-users h1 {
    font-size: 50px;
  }
  .bloco-info-analysts {
    width: 45%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .bloco-info-cards {
    width: 100%;
    height: 50%;
  }
  .container-grid-cards {
    width: 80%;
    margin-left: 10%;
  }
  .logo-users {
    font-size: 150px;
    color: #ffffff;
    margin-right: 5px;
  }
  .logo-analysts {
    font-size: 150px;
    color: #ffffff;
    margin-left: 5px;
    margin-right: 5px;
  }
  .container-detalhes-users{
    text-align: left;
    color: #ffffff;
  }
  .titulo-info{
    margin-left: 2%;
    color: #ffffff;
  }
  
}

/* Media query para exibição mobile (tablet e celular) */

@media(max-width: 1024px) {
  
  .titulo {
    color: #ffffff;
    margin-bottom: 10px;
  }
  .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    right: 0;
    top: 0;
    width: 95%;
    margin-top: 28%;
    margin-right: 2%;
    height: 95vh;
    z-index: -1;
  }
  
  .bloco-detalhes-info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20%;
    width: 100%;
    border: 1px solid #30363D;
    border-radius: 10px;
  }
  .bloco-info-users {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container-detalhes-users h1 {
    font-size: 50px;
  }
  .bloco-info-analysts {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .bloco-info-cards {
    width: 100%;
    height: 50%;
  }
  .container-grid-cards {
    font-size: 10px;
    width: 100%;
  }
  .logo-users {
    font-size: 150px;
    color: #ffffff;
    margin-right: 5px;
  }
  .logo-analysts {
    font-size: 150px;
    color: #ffffff;
    margin-left: 5px;
    margin-right: 5px;
  }
  .container-detalhes-users{
    text-align: left;
    color: #ffffff;
  }
  .titulo-info{
    margin-left: 2%;
    color: #ffffff;
  }
}
`;
