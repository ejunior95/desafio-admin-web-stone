import React from 'react';
import { Container } from './styles';
import SideMenu from '../../components/SideMenu';

const UsersPage: React.FC = () => {
  return (
      <Container>
           <SideMenu
          classNameItem1="inactive"
          classNameItem2="active"
          classNameItem3="inactive"
          classNameItem4="inactive"
          classNameItem5="inactive"
          />
      </Container>
  );
}

export default UsersPage;