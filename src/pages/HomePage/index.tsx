import React, {
   useContext, 
   useState, 
   useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AnalystContext } from '../../context/AnalystContext';
import { format, parseISO } from 'date-fns';
import { Container } from './styles';
import BannerInfoUser from '../../components/BannerInfoUser';
import DataGrid from '../../components/DataGrid';
import { RiGroupLine } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
import { ImCheckmark } from "react-icons/im";
import { IoMdCloseCircle } from "react-icons/io";
import {api} from '../../services/api'

  interface IUsers {
    id: number;
    enabledFeatures: number[];
    metadatas: {
        validDocument: boolean,
        verified: boolean
        }
      }
  
  interface ICardsResponse {
        metadatas: { name: string;};
        createdAt: string;
        verificado?: boolean;
        status: string;
        user_id: number
      }

  interface IUsersInfo {
    total: number,
    documentosValidados: number;
    verificados: number
  }

  interface IAnalyst {
    id: number;
    user_id: number;
    nome_user?: string;
    email: string;
    password: string;
    roles: string[];
  }

    interface IAnalystsInfo {
      total: number,
      totalN1: number;
      totalN2: number
    }

const HomePage: React.FC = () => {

  const { analystLogado, permissoes } = useContext(AnalystContext);

  const [usersInfo,setUsersInfo] = useState({} as IUsersInfo);
  const [analystsInfo,setAnalystsInfo] = useState({} as IAnalystsInfo);
  const [cards,setCards] = useState([] as ICardsResponse[]);

  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    
    // Redireciona o usuário para a página, caso haja um erro na digitação da url
 
    if (location.pathname !== '/home') {
      history.push('/home')
      return
    }
    
    api.get<IAnalyst[]>('analysts')
    .then(res => {
        const totais = res.data.reduce((acc, analyst) => {
          acc.total += 1
          acc.totalN1 += (analyst.roles.filter(role => role === 'n1').length) > 0 ? 1 : 0
          acc.totalN2 += (analyst.roles.filter(role => role === 'n2').length) > 0 ? 1 : 0
          return acc;
        }, {
          totalN1: 0,
          totalN2: 0,
          total: 0,
        });
        setAnalystsInfo(totais)
      })

    api.get<ICardsResponse[]>('cards')
    .then(resCards => {

        api.get<IUsers[]>('users')
        .then(res => {
            const total = res.data.length
            const documentosValidados = res.data.filter(user => user.metadatas.validDocument).length
            const verificados = res.data.filter(user => user.metadatas.verified).length
    
            setUsersInfo({
              total,
              documentosValidados,
              verificados
              })

              const cards_ = resCards.data.map(card => {
                let card_ = card  
                res.data.map(user => {
                      if (user.id === card.user_id) {
                            card_.verificado = user.metadatas.verified
                      }
                  })
                  return card_
              })
                setCards(cards_)

            })
      })    
  },[])

  const rows =  cards.filter((card, i) => i < 3 )
  .map(card => 
      [
      card.metadatas.name,
      format(parseISO(card.createdAt),'dd/MM/yy - HH:mm'),
      <span style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        {card.verificado ? <ImCheckmark /> : <IoMdCloseCircle />}
      </span>,
      card.status
      ])

  return(
      <Container>

            <BannerInfoUser />
            <div className="conteudo">
          
              <div className="bloco-detalhes-info">
                
                <div className="bloco-info-users">
                  <RiGroupLine className="logo-users" />
                  <div className="container-detalhes-users">
                      <h2>Base de usuários</h2>
                      <h1>{usersInfo.total}</h1>
                      <span>Documentos validados: {usersInfo.documentosValidados}</span><br />
                      <span>Verificados: {usersInfo.verificados}</span>
                  </div>
                </div>  

                <div className="bloco-info-analysts">
                    <RiUserSettingsLine className="logo-analysts" />
                    <div className="container-detalhes-users">
                        <h2>Analistas</h2>
                        <h1>{analystsInfo.total}</h1>
                        <span>Nivel de acesso N1: {analystsInfo.totalN1}</span><br />
                        <span>Nivel de acesso N2: {analystsInfo.totalN2}</span>
                    </div>
                </div>
                <div className="bloco-info-cards">
                  <div className="container-grid-cards">
                    <h2 className="titulo">Pedidos de cartão</h2>
                      <DataGrid 
                      headers={[
                        'Nome do usuário',
                        'Data da requisição',
                        'Verificado',
                        'Status'
                      ]} 
                      rows={rows}
                      />
                  </div>
                </div>
              </div>

            </div>

      </Container>
  );
}

export default HomePage;