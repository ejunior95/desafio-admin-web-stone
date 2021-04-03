import React from 'react';
import { Container } from './styles';

interface IProps {
  placeholder: string;
  type: string
}

const InputBox: React.FC<IProps> = (props:IProps) => {
  
  const {
    placeholder,
    type
  } = props

  return(
      <Container>
          <input type={type} placeholder={placeholder} />
      </Container>
  );
}

export default InputBox;