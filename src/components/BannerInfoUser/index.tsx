import React, { useContext } from 'react';
 import { AnalystContext } from '../../context/AnalystContext';
 import { Container } from './styles';
 import { FaUserCircle } from "react-icons/fa";

const BannerInfoUser: React.FC = () => {
    
  const { analystLogado, permissoes } = useContext(AnalystContext);

  return(
      <Container>
          
          <div className="bloco-user-info">
                <div className="container-info-user">
                  <h1 className="titulo-info-user">{analystLogado.nome_user}</h1>
                  <span>{analystLogado.email}</span>
                  <div className="container-roles">
                    {permissoes.n1 && <span className="roles n1" title="Role N1">N1</span>}
                    {permissoes.n2 && <span className="roles n2" title="Role N2">N2</span>}
                  </div>
                </div>
                <FaUserCircle className="logo-user" />
              </div>

      </Container>
  );
}

export default BannerInfoUser;