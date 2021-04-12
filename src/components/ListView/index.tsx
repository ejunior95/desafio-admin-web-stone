import React from 'react';
import { Container } from './styles';

interface IProps {
  itens: string[]
  setSelectedItem: (id: number) => void
}

const ListView = (props:IProps) => {

  const {
    itens,
    setSelectedItem
  } = props

  return(
      <Container>
          <ul>
            {itens.map((item, i) => <li onClick={() => setSelectedItem(i)}>{item}</li>)}
          </ul>
      </Container>
  );
}

export default ListView;