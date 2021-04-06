import styled from 'styled-components';
import bg_01 from '../../assets/bg_001.png';

export const Container = styled.div`
  .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    right: 0;
    top: 0;
    width: 70%;
    margin-top: 2%;
    margin-right: 2%;
    height: 90vh;
    z-index: -1;
  }
  .bloco-user-info {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 30%;
    border-radius: 10px;
    margin-bottom: 2%;
    background-image: url(${bg_01});
    background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .bloco-detalhes-info{
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    height: 75%;
    width: 100%;
    border: 1px solid #30363D;
    border-radius: 10px;
  }
  .titulo-info{
    margin-left: 2%;
    color: #ffffff;
  }
  .logo-user {
    font-size: 500%;
    color: #ffffff;
    margin-right: 20px;
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
    margin-right: 10px;
  }
  .roles.n2{
    background-color: #FF0000;
  }
  .roles.n1.inactive,
  .roles.n2.inactive {
    display: none;
  }
`;
