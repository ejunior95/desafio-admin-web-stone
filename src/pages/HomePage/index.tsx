import React from 'react';
import { Container, Header } from './styles';
import { GiStoneBlock } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineAudit } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

const HomePage: React.FC = () => {
  return(
      <Container>

          <Header>
            <div className="container-logo">
              <h2 className="text-logo">Cred</h2>
                <GiStoneBlock className="logo" />
              <h2 className="text-logo">Rock</h2>
            </div>
            <ul>
              <li className="active"><MdDashboard /> Página inicial</li>
              <li className="inactive"><FiUsers /> Visualizar usuários</li>
              <li className="inactive"><BsCreditCard /> Visualizar cartões disponiveis</li>
              <li className="inactive"><AiOutlineAudit /> Visualizar auditoria </li>
            </ul>
          </Header>

      </Container>
  );
}

export default HomePage;