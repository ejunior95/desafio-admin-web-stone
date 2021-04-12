import { formatISO } from 'date-fns/esm';
import React, { useState, useEffect } from 'react';
import BannerInfoUser from '../../components/BannerInfoUser';
import Card from '../../components/Card';
import { api } from '../../services/api';
import { Container } from './styles';


interface ICardResponse {
  id: number;
  metadatas: { 
      name?: string;
      digits: number;
      limit: number;
  };
  createdAt: string;
  updatedAt?: string;
  status: string;
}

const CardsPage: React.FC = () => {
  
  const [card,setCard] = useState({} as ICardResponse);

  useEffect(() => {
    carregarDados()
  },[])
  
  async function carregarDados() {
   const resCards = await api.get<ICardResponse[]>('cards')
      setCard(resCards.data.filter(card => card.status === 'requested')[0])
  }

  async function handleChangeStatus(id: number, status: string) {
    const payload = {...card, status}
    await api.put(`cards/${id}`, payload)

    await api.post('audits', {
      id: card.id,
      createdAt: formatISO(new Date),
      type: "card-status-change",
      before: card,
      after: payload
    }) 
    carregarDados()
  }

  return (
      <Container>
          <BannerInfoUser />
          <div className="conteudo">
            <div className="bloco-detalhes-info">
              <Card card={card} onChangeStatus={handleChangeStatus} />
            </div>
          </div>
      </Container>
  );
}

export default CardsPage;