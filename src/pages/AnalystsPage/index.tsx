import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import BannerInfoUser from '../../components/BannerInfoUser';
import DataGrid from '../../components/DataGrid';
import { api } from '../../services/api';


interface IAnalyst {
  id: number;
  user_id: number;
  nome_user?: string;
  email: string;
  roles: string[];
}

interface IAnalystName {
  id: number;
  name: string
}

const AnalystsPage: React.FC = () => {

  const [analysts, setAnalysts] = useState<IAnalyst[]>([] as IAnalyst[])

  useEffect(() => {
    api.get<IAnalyst[]>('analysts')
    .then(resAnalysts => {

        api.get<IAnalystName[]>('users')
        .then(res => {
            const analystsFinal = resAnalysts.data.map(analyst => {
              let analyst_ = analyst
              res.data.map(user => {
                  if (user.id === analyst.user_id) {
                    analyst_.nome_user = user.name
                  }
              })
               return analyst_
            })
            setAnalysts(analystsFinal)
          }
          )
      })
  },[])

  const rows = analysts.map(analyst => ([
    analyst.nome_user ?? '-',
    analyst.email,
    analyst.roles.toString()
  ]))

    return(
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
                      rows={rows}
                      />
                </div>
            </div>
      </Container>
  );
}

export default AnalystsPage;