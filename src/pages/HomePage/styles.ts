import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  height: 100%;
  width: 45vh;
  background-color: #ffffff;

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
    width: 80%;
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
`;
