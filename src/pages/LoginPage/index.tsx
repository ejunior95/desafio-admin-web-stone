import React from 'react';
import { Container, ContainerLogin } from './styles';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import { GiStoneBlock } from "react-icons/gi";
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return(
      <Container>
          <ContainerLogin>
            <div className="container-textos">
              <h1 className="titulo-login">Olá analista!</h1>
              <p className="subtitulo-login">Digite seu login e senha abaixo para prosseguir</p>
            </div>
              <div className="container-inputs">
                <InputBox type="text" placeholder="Digite o seu email aqui..." />
                <InputBox type="password" placeholder="Digite sua senha aqui..." />
              </div>
              <div className="container-button">
              <Link to="/home">
                <CustomButton type="submit" text="Entrar" />
              </Link>
              </div>
          </ContainerLogin>
          <div className="container-logo">
            <h2 className="text-logo">Cred</h2>
               <GiStoneBlock className="logo" />
            <h2 className="text-logo">Rock</h2>
          </div>
      </Container>
  );
}

export default LoginPage;