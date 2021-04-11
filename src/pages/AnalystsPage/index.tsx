import React from 'react';
import BannerInfoUser from '../../components/BannerInfoUser';
import DataGrid from '../../components/DataGrid';
import { Container } from './styles';

const AnalystsPage: React.FC = () => {
  return (
      <Container>
            <BannerInfoUser />
            <div className="conteudo">
                <div className="bloco-detalhes-info">
                <DataGrid
                      headers={[
                        'Nome do analista',
                        'Email',
                        'Níveis de acesso (Roles)'
                      ]} 
                      rows={[
                        ['Rafael Rodrigues da Silva',
                        'admin0@gmail.com',
                        'N1 e N2']
                    ]}
                      />
                </div>
            </div>
      </Container>
  );
}

export default AnalystsPage;