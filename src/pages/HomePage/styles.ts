import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;
export const Header = styled.div`
background-color: #ffffff;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media(min-width: 1025px) {
  height: 100%;
  width: 44vh;
  .container-logo {
    height: 20%;
    padding-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;

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
  ul {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: space-around;
      height: 50%;
      width: 100%;
  }
  ul li {
    width: 100%;
    padding: 2vh 0vh 2vh 2vh;
    border-radius: 0px 5px 5px 0px; 
    border: 2px solid transparent;
    cursor: pointer;
    list-style: none;
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
    font-size: 10px;
  }
  .logo-copyright {
    font-size: 10px;
  }
}
@media(max-width: 1024px) {
  height: 100%;
  width: 100%;

  .container-logo {
    height: 10%;
    padding-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

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
    border-radius: 50%;
    border: 1px solid #000000;
    display:flex;
    align-items: center;
    justify-content:center;
    padding: 5px;
    cursor: pointer;
  }
  .botao-expandir-retrai-menu-icone {
    font-size: 25px;
    display:flex;

  }
  ul {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: space-around;
      height: 50%;
      padding-left: 1vh;
      width: 95%;
  }
  ul li {
    padding: 1vh;
    border-radius: 5px;
    border: 2px solid transparent;
    cursor: pointer;
    list-style: none;
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
    width: 100%;
    height: 10%;
  }
  .copyright {
    text-align: center;
    width: 100%;
    font-size: 10px;
  }
  .logo-copyright {
    font-size: 10px;
  }
  
}
`;
