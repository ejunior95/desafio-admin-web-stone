import React, { useContext, useState, useEffect } from 'react';
import { Container } from './styles';
import { FaUserCircle } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
import { AnalystContext } from '../../context/AnalystContext';
import SideMenu from '../../components/SideMenu';
import axios from 'axios';

  interface IUsers {
    enabledFeatures: number[];
    metadatas: {
        validDocument: boolean,
        verified: boolean
        }
      }

  interface IUsersInfo {
    total: number,
    documentosValidados: number;
    verificados: number
  }

const HomePage: React.FC = () => {

  const { analystLogado, permissoes } = useContext(AnalystContext);
  const [usersInfo,setUsersInfo] = useState({} as IUsersInfo)



  useEffect(() => {
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
        })
  },[])

  return(
      <Container>
        
          <SideMenu
          classNameItem1="active"
          classNameItem2="inactive"
          classNameItem3="inactive"
          classNameItem4="inactive"
          classNameItem5="inactive"
          />

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
              </div>

              </div>
            
            </div>
      </Container>
  );
}

export default HomePage;