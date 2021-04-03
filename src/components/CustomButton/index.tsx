import React from 'react';
import { Container } from './styles';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  text: string
}

const CustomButton: React.FC<IProps> = (props:IProps) => {

  const {
    type,
    text
  } = props

  return (
      <Container>
          <button type={type}>{text}</button>
      </Container>
  );
}

export default CustomButton;