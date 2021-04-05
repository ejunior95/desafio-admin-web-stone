import React from 'react';
import { Container } from './styles';
import SideMenu from '../../components/SideMenu';

const AuditPage: React.FC = () => {
  return(
      <Container>
          
          <SideMenu
          classNameItem1="inactive"
          classNameItem2="inactive"
          classNameItem3="inactive"
          classNameItem4="inactive"
          classNameItem5="active"
          />

      </Container>
  );
}

export default AuditPage;