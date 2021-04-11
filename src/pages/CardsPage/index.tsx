import React from 'react';
import BannerInfoUser from '../../components/BannerInfoUser';
import Card from '../../components/Card';
import { Container } from './styles';

const CardsPage: React.FC = () => {
  return (
      <Container>
          <BannerInfoUser />
          <div className="conteudo">
            <div className="bloco-detalhes-info">
              <Card />
            </div>
          </div>
      </Container>
  );
}

export default CardsPage;