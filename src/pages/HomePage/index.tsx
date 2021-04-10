import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import DataGrid from '../../components/DataGrid';
import { Container } from './styles';
import { FaUserCircle } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
import { AnalystContext } from '../../context/AnalystContext';
import { ImCheckmark } from "react-icons/im";
import { IoMdCloseCircle } from "react-icons/io";
import { format, parseISO } from 'date-fns';
import { useHistory, useLocation } from 'react-router-dom';

  interface IUsers {
    id: number;
    enabledFeatures: number[];
    metadatas: {
        validDocument: boolean,
        verified: boolean
        }
      }
  // interface IAnalysts {
    
  //     }

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

  interface IAnalystsInfo {
    total: number,
    totalN1: number;
    totalN2: number
  }

const HomePage: React.FC = () => {


  const { analystLogado, permissoes } = useContext(AnalystContext);
  const [usersInfo,setUsersInfo] = useState({} as IUsersInfo);
  const [cards,setCards] = useState([] as ICardsResponse[]);
  // const [cardsInfo,setCardsInfo] = useState({} as ICardInfo);
  // const [analystsInfo,setAnalystsInfo] = useState({} as IAnalystsInfo);

  const history = useHistory()
  const location = useLocation()
  useEffect(() => {
    
    // Redireciona o usuário para a página, caso haja um erro na digitação da url
 
    if (location.pathname !== '/home') history.push('/home')

    axios.get<ICardsResponse[]>('http://localhost:3001/api/cards')
    .then(resCards => {

        axios.get<IUsers[]>('http://localhost:3001/api/users')
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

            <div className="conteudo">
          
              <div className="bloco-user-info">
                <div className="container-info-user">
                  <h1>{analystLogado.nome_user}</h1>
                  <span>{analystLogado.email}</span>
                  <div className="container-roles">
                    {permissoes.n1 && <span className="roles n1" title="Role N1">N1</span>}
                    {permissoes.n2 && <span className="roles n2" title="Role N2">N2</span>}
                  </div>
                </div>
                <FaUserCircle className="logo-user" />
              </div>

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
                      <h1>03</h1>
                      <span>Nivel de acesso N1: 2</span><br />
                      <span>Nivel de acesso N2: 2</span>
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