import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import BannerInfoUser from '../../components/BannerInfoUser';
import { Container } from './styles';

const UsersPage: React.FC = () => {
  return (
      <Container>
        <BannerInfoUser />
            <div className="conteudo">
                <div className="bloco-detalhes-info">
                    <div className="container-text-detalhes-info">
                        <FaUserCircle className="icone-user" />
                        <div className="container-nome-email">
                            <h1 className="nome-detalhes-info">Lucas da Silva</h1>
                            <span className="email-detalhes-info">lucas_da_silva@gmail.com</span><br />
                        </div>
                        <span className="data-nascimento-detalhes-info">Data de nascimento: 02/09/1985</span>
                        <span className="salario-base-detalhes-info">Salário base:</span>
                        <h2 className="salario-base-detalhes-info">R$ 15.623,00</h2>
                    </div>
                </div>
            </div>
      </Container>
  );
}

export default UsersPage;