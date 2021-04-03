import React from 'react';
import { Container, ContainerLogin } from './styles';
import InputBox from '../../components/InputBox';

const LoginPage: React.FC = () => {
  return(
      <Container>
          <ContainerLogin>
              <h1 className="titulo-login">Olá auditor!</h1>
              <p className="subtitulo-login">Digite seu login e senha abaixo para prosseguir</p>
              <div className="container-inputs">
                <InputBox type="text" placeholder="Digite o seu usuário aqui..." />
                <InputBox type="password" placeholder="Digite sua senha aqui..." />
              </div>
          </ContainerLogin>
      </Container>
  );
}

export default LoginPage;