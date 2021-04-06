import React from 'react';
import { Container } from './styles';
import { FaUserCircle } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import SideMenu from '../../components/SideMenu';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
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
                  <h1>User 1</h1>
                  <span>admin0@gmail.com</span>
                  <div className="container-roles">
                    <span className="roles n1" title="Role N1">N1</span>
                    <span className="roles n2" title="Role N2">N2</span>
                  </div>
                </div>
                <FaUserCircle className="logo-user" />
              </div>

              <div className="bloco-detalhes-info">
                <div className="bloco-info-users">
                  <RiGroupLine className="logo-users" />
                  <div className="container-detalhes-users">
                      <h2>Base de usuários</h2>
                      <h1>15</h1>
                      <span>Documentos validados: 05</span><br />
                      <span>Verificados: 10</span>
                  </div>
                </div>  

              </div>
            
            </div>
      </Container>
  );
}

export default HomePage;