import React from 'react';
import BannerInfoUser from '../../components/BannerInfoUser';
import TimeLine from '../../components/TimeLine';
import { Container } from './styles';

const AuditPage: React.FC = () => {
  return(
      <Container>
          <BannerInfoUser />
          <div className="conteudo">
              <div className="bloco-detalhes-info">
                <TimeLine />
              </div>
          </div>
         
      </Container>
  );
}

export default AuditPage;