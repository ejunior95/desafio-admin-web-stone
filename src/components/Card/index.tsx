import React from 'react';
import { Container } from './styles';
import { FcSimCardChip } from "react-icons/fc";
import { GiStoneBlock } from 'react-icons/gi';

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

               </div>
           </div>
      </Container>
  );
}

export default Card;