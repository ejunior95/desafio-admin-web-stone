import React from 'react';
import BannerInfoUser from '../../components/BannerInfoUser';
import { Container } from './styles';

const AnalystsPage: React.FC = () => {
  return (
      <Container>
            <BannerInfoUser />
            <div className="conteudo">
                <div className="bloco-detalhes-info">

                </div>
            </div>
      </Container>
  );
}

export default AnalystsPage;