import React from 'react';
import { Link } from 'react-router-dom';
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


interface IProps {
  classNameItem1: 'active' | 'inactive';
  classNameItem2: 'active' | 'inactive';
  classNameItem3: 'active' | 'inactive';
  classNameItem4: 'active' | 'inactive';
  classNameItem5: 'active' | 'inactive';
}

const SideMenu: React.FC<IProps> = (props:IProps) => {

  const {
    classNameItem1,
    classNameItem2,
    classNameItem3,
    classNameItem4,
    classNameItem5,
  } = props

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
              <li className={classNameItem1}><MdDashboard /> Página inicial</li>
              </Link>
              <Link to="/users" className="link">
                <li className={classNameItem2}><RiGroupLine /> Visualizar usuários</li>
              </Link>
              <Link to="/analysts" className="link">
                <li className={classNameItem3}><RiUserSettingsLine /> Visualizar analistas</li>
              </Link>
              <Link to="/cards" className="link">
                <li className={classNameItem4}><BsCreditCard /> Visualizar cartões disponiveis</li>
              </Link>
              <Link to ="/audits" className="link">
                <li className={classNameItem5}><AiOutlineAudit /> Visualizar auditoria </li>
              </Link>
              <Link to="/login" className="link">
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