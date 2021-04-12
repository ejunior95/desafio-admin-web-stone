import React from 'react';
import { Container } from './styles';
import { FcSimCardChip } from "react-icons/fc";
import { GiStoneBlock } from 'react-icons/gi';
import { CgClose } from "react-icons/cg";
import { GoCheck } from 'react-icons/go';
import { parseISO } from 'date-fns';

interface ICard {
    id: number;
    metadatas?: { 
        name?: string;
        digits?: number;
        limit: number;
    };
    createdAt: string;
    updatedAt?: string;
    status: string;
  }

interface IProps {
    card: ICard;
    onChangeStatus: (id: number, status: string) => void
}

const Card = (props:IProps) => {

    const {
        card,
        onChangeStatus     
    } = props

  return(
      <Container>
           <div className="card">
             
               <div className="face front">

                   <h3 className="type-card">Crédito/Débito</h3>
                   <div className="container-logo">
                        <h3 className="text-logo">Cred</h3>
                        <GiStoneBlock className="logo" />
                        <h3 className="text-logo">Rock</h3>
                    </div>

                   <FcSimCardChip className="chip"/>
                   <h3 className="number-card">0000 0000 0000 {card.metadatas?.digits}</h3>
                   <h4 className="nome-user-card">{card.metadatas?.name}</h4>
               </div>

               <div className="face back">
                    <div className="container-info-text">
                        <span>Data da requisição:
                        {card.createdAt ? 
                                new Intl.DateTimeFormat('pt-BR').format(
                                    parseISO(card.createdAt),)
                                :
                                '-'
                            }</span><br />
                        <span>Data da última atualização: {card.updatedAt}</span><br />
                        <span className="info-limite">Limite:</span>
                        <h1>
                        {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL',
                            }).format(card.metadatas?.limit ?? 0)}</h1>
                    </div>

                    <div className="container-botoes">
                        <div className="botao-aprovar" title="Aprovar pedido" onClick={() => onChangeStatus(card.id, 'approved')}>
                            <GoCheck className="icone-botao" title="Aprovar pedido" />
                        </div>
                        <div className="botao-rejeitar" title="Rejeitar pedido" onClick={() => onChangeStatus(card.id, 'rejected')}>
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