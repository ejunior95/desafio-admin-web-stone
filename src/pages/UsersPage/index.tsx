import React from 'react';
import BannerInfoUser from '../../components/BannerInfoUser';
import { Container } from './styles';

const UsersPage: React.FC = () => {
  return (
      <Container>
        <BannerInfoUser />
            <div className="conteudo">
                <div className="bloco-detalhes-info">
                    <div className="container-text-detalhes-info">
                        <h1 className="nome-detalhes-info">Lucas da Silva</h1>
                        <span className="email-detalhes-info">lucas_da_silva@gmail.com</span><br />
                        <span className="data-nascimento-detalhes-info">Data de nascimento: 02/09/1985</span><br />
                        <span className="salario-base-detalhes-info">Salário base: R$ 15.623,00</span>
                    </div>
                </div>
            </div>
      </Container>
  );
}

export default UsersPage;