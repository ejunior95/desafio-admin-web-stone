import styled from 'styled-components';
import bg_01 from '../../assets/bg_001.jpg';

export const Container = styled.div`
  .conteudo {
    position: absolute;
    right: 0;
    top: 0;
    width: 75%;
    margin-top: 2%;
    height: 100vh;
    z-index: -1;
  }
  .bloco-user-info {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 95%;
    height: 30%;
    padding-right: 10px;
    border-radius: 10px;
    margin-bottom: 5%;
    background-image: url(${bg_01});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .logo-user {
    font-size: 500%;
    color: #ffffff;
  }
  .container-info-user {
    text-align: right;
    color: #ffffff;
    padding-right: 10px;
  }
  .container-roles {
    display: center;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    padding: 5px;
  }
  .roles{
    background-color: #000000;
    padding: 5px;
    border-radius: 5px;
    font-weight: 700;
    cursor: default;
  }
  .roles.n1{
    background-color: #238636;
    margin-right: 5px;
  }
  .roles.n2{
    background-color: #FF0000;
  }
  .roles.n1{
    background-color: #238636;
    margin-right: 5px;
  }
  .roles.n1.inactive,
  .roles.n2.inactive {
    display: none;
  }
`;
