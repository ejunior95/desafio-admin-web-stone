import React, { FormEvent, useContext, useState } from 'react';
import { Container, ContainerLogin } from './styles';
import InputBox from '../../components/InputBox';
import CustomSubmitButton from '../../components/CustomSubmitButton';
import { GiStoneBlock } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { AnalystContext } from '../../context/AnalystContext';

const LoginPage: React.FC = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { validarLogin } = useContext(AnalystContext);

    function handledSubmit(e:React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      validarLogin(email,senha)
    }

  return(
      <Container>
          <ContainerLogin>
            <div className="container-textos">
              <h1 className="titulo-login">Olá analista!</h1>
              <p className="subtitulo-login">Digite seu email e senha abaixo para prosseguir</p>
            </div>

             <form onSubmit={handledSubmit}>
              <div className="container-inputs">
                <InputBox type="email" placeholder="Digite o seu email aqui..." value={email} onChange={setEmail} />
                <InputBox type="password" placeholder="Digite sua senha aqui..." value={senha} onChange={setSenha}  />
              </div>
              <div className="container-button">
              
                <CustomSubmitButton 
                value="Entrar" 
                />
              
              </div>
             </form>

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