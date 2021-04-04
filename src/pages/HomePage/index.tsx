import React from 'react';
import { Container, Header } from './styles';
import { GiStoneBlock } from "react-icons/gi";
import { RiGroupLine } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineAudit } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";


const HomePage: React.FC = () => {
  return(
      <Container>

          <Header>
            <div className="container-logo">
              <h2 className="text-logo">Cred</h2>
                <GiStoneBlock className="logo" />
              <h2 className="text-logo">Rock</h2>
              <div className="botao-expandir-retrai-menu">
              <MdClose  className="botao-expandir-retrai-menu-icone"/>
              </div>
            </div>
            <ul>
              <li className="active"><MdDashboard /> Página inicial</li>
              <li className="inactive"><RiGroupLine /> Visualizar usuários</li>
              <li className="inactive"><RiAdminLine /> Visualizar analistas</li>
              <li className="inactive"><BsCreditCard /> Visualizar cartões disponiveis</li>
              <li className="inactive"><AiOutlineAudit /> Visualizar auditoria </li>
            </ul>
            <div className="container-copyright">
                <p className="copyright">Desenvolvido com <FaHeart className="logo-copyright" /> por Edvaldo de Ramos Junior</p>
            </div>
          </Header>

      </Container>
  );
}

export default HomePage;