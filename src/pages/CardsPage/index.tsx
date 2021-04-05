import React from 'react';
import { Container } from './styles';
import SideMenu from '../../components/SideMenu';

const CardsPage: React.FC = () => {
  return (
      <Container>
          
          <SideMenu
          classNameItem1="inactive"
          classNameItem2="inactive"
          classNameItem3="inactive"
          classNameItem4="active"
          classNameItem5="inactive"
          />

      </Container>
  );
}

export default CardsPage;