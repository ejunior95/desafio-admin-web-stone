import styled from 'styled-components';

export const Container = styled.div`

/* Media query para exibição desktop */

@media(min-width: 1025px) {
    .container-topo {
    position: fixed;
    left: 3%;
    top: 1%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .logo {
    font-size: 50px;
    color: #000000;
  }
  .text-logo {
    color: #000000;
    padding: 10px;
  }
  .botao-expandir-retrai-menu {
    display: none;
  }
  .botao-expandir-retrai-menu-icone {
    display: none;
  }
  }

/* Media query para exibição em aparelhos mobile (tablet e celular) */

  @media(max-width: 1024px) {

    .container-topo {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position:absolute;
    top: 3%;
    z-index: 1;
  }
  .logo {
    font-size: 50px;
    color: #000000;
  }
  .text-logo {
    color: #000000;
    padding: 10px;
  }
  .botao-expandir-retrai-menu {
    position: absolute;
    right: 5%;
    top: 25%;
    border-radius: 50%;
    border: 2px solid #000000;
    display:flex;
    align-items: center;
    justify-content:center;
    padding: 10px;
    cursor: pointer;
  }
  .botao-expandir-retrai-menu-icone {
    font-size: 20px;
    display:flex;
  }
  }
`;

export const Header = styled.div`
background-color: #ffffff;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media(min-width: 1025px) {
  height: 100%;
  width: 45vh;
  position: fixed;
  ul {
      padding-top: 50%;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: space-around;
      height: 50%;
      width: 100%;
      text-decoration: none;
  }
  ul li {
    width: 100%;
    padding: 2vh 0vh 2vh 2vh;
    border-radius: 0px 5px 5px 0px; 
    border: 2px solid transparent;
    cursor: pointer;
    list-style: none;
    text-decoration: none;
  }
  .link {
    text-decoration: none;
    color: #000000;
  }
  ul li.active {
    width: 100%;
    background-color: #238636;
    color: #ffffff;
    transition: .2s ease-in-out;
  }
  ul li.inactive:hover {
    width: 92%;
    border: 2px solid #238636;
    background-color: #26943C;
    color: #ffffff;
    transition: .2s ease-in-out;
  }
  .container-copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
  }
  .copyright {
    text-align: center;
    width: 100%;
    font-size: 11px;
  }
  .logo-copyright {
    font-size: 11px;
    color: #FF0000;
  }
}
@media(max-width: 1024px) {
  height: 100%;
  width: 100%;
  position: fixed;

  ul {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: space-around;
      height: 50%;
      position: absolute;
      left: 3%;
      top: 30%;
      width: 95%;
      text-decoration: none;
  }
  ul li {
    padding: 1vh;
    border-radius: 5px;
    border: 2px solid transparent;
    cursor: pointer;
    list-style: none;
    text-decoration: none;
  }
  .link {
    text-decoration: none;
    color: #000000;
  }
  ul li.active {
    width: 95%;
    background-color: #238636;
    color: #ffffff;
    transition: .2s ease-in-out;
  }
  ul li.inactive:hover {
    width: 95%;
    border: 2px solid #238636;
    background-color: #26943C;
    color: #ffffff;
    transition: .2s ease-in-out;
  }
  .container-copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom:0;
    width: 100%;
    height: 10%;
  }
  .copyright {
    text-align: center;
    width: 100%;
    font-size: 11px;
  }
  .logo-copyright {
    font-size: 11px;
    color: #FF0000;
  }
  
}
`;
