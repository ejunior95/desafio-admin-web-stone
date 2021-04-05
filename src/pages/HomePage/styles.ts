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
    background-position: bottom;
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
`;
