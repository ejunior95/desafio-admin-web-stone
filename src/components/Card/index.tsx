import React from 'react';
import { Container } from './styles';
import { FcSimCardChip } from "react-icons/fc";
import { GiStoneBlock } from 'react-icons/gi';
import { CgClose } from "react-icons/cg";
import { GoCheck } from 'react-icons/go';

const Card: React.FC = () => {
  return(
      <Container>
           <div className="card">
             
               <div className="face front">

                   <h3 className="type-card">Débito</h3>
                   <div className="container-logo">
                        <h3 className="text-logo">Cred</h3>
                        <GiStoneBlock className="logo" />
                        <h3 className="text-logo">Rock</h3>
                    </div>

                   <FcSimCardChip className="chip"/>
                   <h3 className="number-card">0000 0000 0000 2345</h3>
                   <h4 className="nome-user-card">Edvaldo de Ramos Junior</h4>
               </div>

               <div className="face back">
                    <div className="container-info-text">
                        <span>Data da requisição: 25/08/2018</span><br />
                        <span>Data da última atualização: 03/10/2020</span><br />
                        <span className="info-limite">Limite:</span>
                        <h1>R$ 8.950,00</h1>
                    </div>

                    <div className="container-botoes">
                        <div className="botao-aprovar" title="Aprovar pedido">
                            <GoCheck className="icone-botao" title="Aprovar pedido" />
                        </div>
                        <div className="botao-rejeitar" title="Rejeitar pedido">
                            <CgClose className="icone-botao" title="Rejeitar pedido" />
                        </div>
                    </div>

                    <div className="container-info-text">
                        <span className="info-rodape">Clique nos botões acima para aprovar ou rejeitar a solicitação</span>
                    </div>

               </div>
           </div>
      </Container>
  );
}

export default Card;