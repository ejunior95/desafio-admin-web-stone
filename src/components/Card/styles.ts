import styled from 'styled-components';

export const Container = styled.div`
  
  .card {
    color: #ffffff;
    position: relative;
    width: 508px;
    height: 314px;
    transform-style: preserve-3d;
    perspective: 500px;
    border-radius: 10px;
  }
  
    .card:hover .face.front {
        transform: rotateY(180deg);
    }
    .card:hover .face.back {
      transform: rotateY(360deg);
    }

    .card .face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #000000;
    transform-style: preserve-3d;
    transition: 1s;
    backface-visibility: hidden;
  }

  .card .face.front:before {
    content: '';
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    background-color: #ffffff;
    border-radius: 50%;
    opacity: 0.5;
  }
  .card .face.front:after {
    content: '';
    position: absolute;
    bottom: 40px;
    right: 80px;
    width: 60px;
    height: 60px;
    background-color: #ffffff;
    border-radius: 50%;
    opacity: 0.7;
  }

  .card .face.back {
      background-color: #238636;
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    .container-info-text {
      width: 95%;
    }

    .container-info-text-rodape {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 95%;
    }
    
    .info-rodape {
      font-size: 11px;
    }

  .container-botoes {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  .botao-aprovar {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #238636;
    border: 2px solid #ffffff;
    border-radius: 50%;
    height: 80px;
    width: 80px;
    cursor: pointer;
    transition: .3s ease-in-out;
  }
  
  .botao-aprovar:hover {
    background-color: #ffffff;
    border-color: #ffffff;
    transition: .3s ease-in-out;
  
  .icone-botao {
    color: #238636;
    transition: .3s ease-in-out;
  }
  }

  .botao-rejeitar {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #238636;
    border: 2px solid #ffffff;
    border-radius: 50%;
    height: 80px;
    width: 80px;
    cursor: pointer;
  }

  .botao-rejeitar:hover {
    background-color: #ffffff;
    border-color: #ffffff;
    transition: .3s ease-in-out;
  
  .icone-botao {
    color: #238636;
    transition: .3s ease-in-out;
  }
  }

  .icone-botao {
    color: #ffffff;
    font-size: 40px;
  }

  .info-limite {
    font-size: 10px;
  }

  .container-logo {
    position: absolute;
    right: 40px;
    top: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .logo {
    font-size: 30px;
    color: #ffffff;
  }
  .text-logo {
    color: #ffffff;
    padding: 5px;
  }

  .chip {
      font-size: 100px;
      position: absolute;
      top: 65px;
      left: 50px;
  }

  .type-card,
  .number-card,
  .nome-user-card {
    
   }

   .type-card {
       position: absolute;
       left: 40px;
       top: 32px;
       font-style: italic;
       font-size: 23px;
   }

   .number-card {
      position: absolute;
      top: 180px;
      left: 40px;
      letter-spacing: 6px;
      font-size: 18px;
      font-family: 'Orbitron', sans-serif !important;
   }

   .nome-user-card {
       position: absolute;
       bottom: 50px;
       left: 40px;
       letter-spacing: 2px;
       text-transform: uppercase;
   }

`;
