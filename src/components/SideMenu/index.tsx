import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Header} from './styles';
import { GiStoneBlock } from "react-icons/gi";
import { RiGroupLine } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineAudit } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { AnalystContext } from '../../context/AnalystContext';
import { useState } from 'react';

const SideMenu: React.FC = () => {

  const {encerrarSessao} = useContext(AnalystContext);

  const location = useLocation()
  const path = location.pathname

  return(
      <Container>
            
            <div className="container-topo">

              <h2 className="text-logo">Cred</h2>
                <GiStoneBlock className="logo" />
              <h2 className="text-logo">Rock</h2>

              <div className="botao-expandir-retrai-menu">
                <MdClose  className="botao-expandir-retrai-menu-icone"/>
              </div>
            
            </div>

          <Header>
            <ul>
              
              <Link to="/home" className="link">
              <li className={path === '/home' ? 'active' : 'inactive'}><MdDashboard /> Página inicial</li>
              </Link>
              <Link to="/users" className="link">
                <li className={path === '/users' ? 'active' : 'inactive'}><RiGroupLine /> Visualizar base de usuários</li>
              </Link>
              <Link to="/analysts" className="link">
                <li className={path === '/analysts' ? 'active' : 'inactive'}><RiUserSettingsLine /> Visualizar analistas</li>
              </Link>
              <Link to="/cards" className="link">
                <li className={path === '/cards' ? 'active' : 'inactive'}><BsCreditCard /> Visualizar pedidos de cartão</li>
              </Link>
              <Link to ="/audits" className="link">
                <li className={path === '/audits' ? 'active' : 'inactive'}><AiOutlineAudit /> Visualizar auditorias </li>
              </Link>
              <Link to="/login" className="link" onClick={encerrarSessao}>
                <li className="inactive"><IoMdExit /> Encerrar sessão </li>
              </Link>
            
            </ul>
            
            <div className="container-copyright">
                <p className="copyright">Desenvolvido com <FaHeart className="logo-copyright" /> por Edvaldo de Ramos Junior</p>
            </div>
          </Header>

      </Container>
  );
}

export default SideMenu;