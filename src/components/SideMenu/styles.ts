import styled from 'styled-components';

export const Container = styled.div`

/* Media query para exibição em desktops */

@media(min-width: 1025px) {
    .container-topo-active,
    .container-topo-inactive {
    position: fixed;
    left: 3%;
    top: 1%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .logo-active,
  .logo-inactive {
    font-size: 50px;
    color: #000000;
  }
  .text-logo-active,
  .text-logo-inactive {
    color: #000000;
    padding: 10px;
  }
  .botao-expandir-retrai-menu {
    display: none;
  }
  .botao-retrai-menu-icone,
  .botao-expandir-menu-icone {
    display: none;
  }
  }

  /* Media query para exibição mobile (tablet e celular) */

  @media(max-width: 1024px) {

  .container-topo-active {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position:fixed;
    top: 0;
    padding-top: 5px;
    padding-bottom: 5px;
    z-index: 1;
    background-color: #ffffff;
    transition: .5s ease-in-out;
  }
  .container-topo-inactive {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position:fixed;
    top: 0;
    padding-top: 5px;
    padding-bottom: 5px;
    z-index: 1;
    background-color: #000000;
    transition: .5s ease-in-out;
  }
  .logo-active {
    font-size: 50px;
    color: #000000;
  }
  .logo-inactive {
    font-size: 50px;
    color: #ffffff;
  }
  .text-logo-active {
    color: #000000;
    padding: 10px;
  }
  .text-logo-inactive {
    color: #ffffff;
    padding: 10px;
  }
  .botao-expandir-retrai-menu-active {
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
  .botao-expandir-retrai-menu-inactive {
    position: absolute;
    right: 5%;
    top: 25%;
    border-radius: 50%;
    border: 2px solid #ffffff;
    display:flex;
    align-items: center;
    justify-content:center;
    padding: 10px;
    cursor: pointer;
  }
  .botao-retrai-menu-icone {
    font-size: 20px;
    display:flex;
    color: #000000;
  }
  .botao-expandir-menu-icone {
    font-size: 20px;
    display:flex;
    color: #ffffff;
  }
  }
`;

export const Header = styled.div`
transition: transform .5s ease-in-out;
background-color: #ffffff;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

/* Media query para exibição em desktops */

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

 /* Media query para exibição mobile (tablet e celular) */

 @media(max-width: 1024px) {
  height: 100%;
  width: 100%;
  position: fixed;
  

  &.inactive-menu {
    position: absolute;
    transform: translateX(-100%);
  }

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

 .inactive-menu {
  color: pink;
 }

}
`;
