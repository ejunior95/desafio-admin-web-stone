import React, { useState, useEffect, useRef } from 'react';
import { Container, ContainerLogin } from './styles';
import InputBox from '../../components/InputBox';
import CustomSubmitButton from '../../components/CustomSubmitButton';
import { GiStoneBlock } from "react-icons/gi";
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {

  const [analysts, setAnalysts] = useState([]);
  const url =
    process.env.NODE_ENV === "production"
      ? "/api"
      : "http://localhost:3001/api";

  useEffect(() => {
    fetch(`${url}/analysts`)
      .then(function (response) {
        return response.json();
      })
      .then(setAnalysts);
  }, [url]);

  const InputEmail = () => {
    const emailRef = useRef(null);
  }
  const InputSenha = () => {
    const senhaRef = useRef(null);
  }

  // useEffect(() => {
  //   emailRef.current.focus();
  // }, []);
  // useEffect(() => {
  //   senhaRef.current.focus();
  // }, []);

  return(
      <Container>
          <ContainerLogin>
            <div className="container-textos">
              <h1 className="titulo-login">Olá analista!</h1>
              <p className="subtitulo-login">Digite seu email e senha abaixo para prosseguir</p>
            </div>

             <form action="/home" method="post">
              <div className="container-inputs">
                <InputBox type="email" placeholder="Digite o seu email aqui..."  />
                <InputBox type="password" placeholder="Digite sua senha aqui..."  />
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