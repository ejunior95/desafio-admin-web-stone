import React, { useState } from 'react';
import { Container } from './styles';
import BannerInfoUser from '../../components/BannerInfoUser';
import TimeLine from '../../components/TimeLine';
import { useEffect } from 'react';
import { api } from '../../services/api';

interface ICard {
  id: number;
  metadatas: { 
      name?: string;
      digits: number;
      limit: number;
  };
  createdAt: string;
  updatedAt?: string;
  status: string;
}

interface IAudit {
  type: string;
  createdAt: string;
  before: ICard;
  after: ICard
}

const AuditPage: React.FC = () => {

  const [audits, setAudits] = useState<IAudit[]>([] as IAudit[])


  useEffect(() => {
    api.get('audits')
    .then(res => setAudits(res.data))
  },[])


  return(
      <Container>
          <BannerInfoUser />
          <div className="conteudo">
              <div className="bloco-detalhes-info">
                <TimeLine audits={audits} />
              </div>
          </div>
         
      </Container>
  );
}

export default AuditPage;