import styled from 'styled-components';
import bg_01 from '../../assets/bg_001.png';


export const Container = styled.div`

  /* Media query para exibição em desktop */

    @media(min-width: 1025px) {
    
        .bloco-user-info {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 70%;
          border-radius: 10px;
          padding-top: 5%;
          padding-bottom: 3%;
          margin-bottom: 3%;
          margin-left: 28%;
          background-image: url(${bg_01});
          background-attachment: fixed;
          background-position: bottom;
          background-repeat: no-repeat;
          background-size: cover;
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
    
    }
    
    /* Media query para exibição mobile (tablet e celular) */

    @media(max-width: 1024px) {
        
        .bloco-user-info {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 95%;
        height: 100%;
        border-radius: 10px;
        padding-top: 15%;
        padding-bottom: 10%;
        margin-top: 15%;
        margin-bottom: 5%;
        margin-left: 2.5%;
        background-image: url(${bg_01});
        background-attachment: fixed;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        }

        .bloco-user-info .titulo-info-user {
          font-size: 110%;
        }
        
        .logo-user {
          font-size: 300%;
          color: #ffffff;
          margin-right: 20px;
        }

        .container-info-user {
        text-align: right;
        color: #ffffff;
        padding-right: 10px;
        }
        .container-info-user h1 {
           font-size: 25px;
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
    }
`;
