import React from 'react';
import { Container, ContainerLogin } from './styles';
import InputBox from '../../components/InputBox';

const LoginPage: React.FC = () => {
  return(
      <Container>
          <ContainerLogin>
              <h1 className="TituloLogin">Olá auditor!</h1>
              <p className="SubtituloLogin">Digite seu login e senha abaixo para prosseguir</p>
              <div className="ContainerInputs">
                <InputBox type="text" placeholder="Digite o seu usuário aqui..." />
                <InputBox type="password" placeholder="Digite sua senha aqui..." />
              </div>
          </ContainerLogin>
      </Container>
  );
}

export default LoginPage;