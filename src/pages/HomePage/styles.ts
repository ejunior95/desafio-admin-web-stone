import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;
export const Header = styled.div`
@media(max-width: 80000px) {
  height: 100%;
  width: 44vh;
  ul {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: space-around;
      height: 50%;
      padding-left: 1vh;
  }
  ul li {
    padding: 1vh;
    border-radius: 5px;
    border: 2px solid transparent;
    cursor: pointer;
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
}
@media(max-width: 500px) {
  height: 100%;
  width: 100%;

  ul {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: space-around;
      height: 50%;
      padding-left: 1vh;
  }
  ul li {
    padding: 1vh;
    border-radius: 5px;
    border: 2px solid transparent;
    cursor: pointer;
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
}
background-color: #ffffff;
`;
