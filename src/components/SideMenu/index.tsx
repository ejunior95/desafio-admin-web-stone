import React, { useState, useContext } from 'react';
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

const SideMenu: React.FC = () => {

  const {encerrarSessao} = useContext(AnalystContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const location = useLocation()
  const path = location.pathname

  function ToggleMenu() {
    setToggleMenu(!toggleMenu)
  }

  return(
      <Container>
            
            <div className={toggleMenu ? 'container-topo-active' : 'container-topo-inactive'}>

              <h2 className={toggleMenu ? 'text-logo-active' : 'text-logo-inactive'}>Cred</h2>
                <GiStoneBlock className={toggleMenu ? 'logo-active' : 'logo-inactive'} />
              <h2 className={toggleMenu ? 'text-logo-active' : 'text-logo-inactive'}>Rock</h2>

              <div className={toggleMenu ? 'botao-expandir-retrai-menu-active' : 'botao-expandir-retrai-menu-inactive'} onClick={ToggleMenu}>
                {toggleMenu
                  ? <MdClose  className="botao-retrai-menu-icone"/>
                  : <FiMenu  className="botao-expandir-menu-icone"/>
                }
              </div>
            
            </div>

          <Header className={toggleMenu ? '' : 'inactive-menu'}>

            <ul>
              
              <Link to="/home" className="link" onClick={ToggleMenu}>
              <li className={path === '/home' ? 'active' : 'inactive'}><MdDashboard /> Página inicial</li>
              </Link>
              <Link to="/users" className="link" onClick={ToggleMenu}>
                <li className={path === '/users' ? 'active' : 'inactive'}><RiGroupLine /> Visualizar base de usuários</li>
              </Link>
              <Link to="/analysts" className="link" onClick={ToggleMenu}>
                <li className={path === '/analysts' ? 'active' : 'inactive'}><RiUserSettingsLine /> Visualizar analistas</li>
              </Link>
              <Link to="/cards" className="link" onClick={ToggleMenu}>
                <li className={path === '/cards' ? 'active' : 'inactive'}><BsCreditCard /> Visualizar pedidos de cartão</li>
              </Link>
              <Link to ="/audits" className="link" onClick={ToggleMenu}>
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