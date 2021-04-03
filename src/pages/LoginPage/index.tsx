import React from 'react';
import { Container, ContainerLogin } from './styles';
import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';

const LoginPage: React.FC = () => {
  return(
      <Container>
          <ContainerLogin>
            <div className="container-textos">
              <h1 className="titulo-login">Olá auditor!</h1>
              <p className="subtitulo-login">Digite seu login e senha abaixo para prosseguir</p>
            </div>
              <div className="container-inputs">
                <InputBox type="text" placeholder="Digite o seu email aqui..." />
                <InputBox type="password" placeholder="Digite sua senha aqui..." />
              </div>
              <div className="container-button">
                <CustomButton type="submit" text="Entrar" />
              </div>
          </ContainerLogin>
      </Container>
  );
}

export default LoginPage;