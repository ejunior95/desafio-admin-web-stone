import React from 'react';
import { Container } from './styles';
import SideMenu from '../../components/SideMenu';

const AnalystsPage: React.FC = () => {
  return (
      <Container>
         
          <SideMenu
          classNameItem1="inactive"
          classNameItem2="inactive"
          classNameItem3="active"
          classNameItem4="inactive"
          classNameItem5="inactive"
          />

      </Container>
  );
}

export default AnalystsPage;