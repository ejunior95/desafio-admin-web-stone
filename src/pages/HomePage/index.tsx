import React from 'react';
import { Container } from './styles';
import SideMenu from '../../components/SideMenu'
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const HomePage: React.FC = () => {
  return(
      <Container>
          <SideMenu />
            <div className="conteudo">
              <div className="bloco-user-info">
                <div className="container-info-user">
                  <h1>User 1</h1>
                  <span>admin0@gmail.com</span>
                </div>
                <FaUserCircle className="logo-user" />
              </div>
            </div>
      </Container>
  );
}

export default HomePage;