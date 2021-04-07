import React from 'react';
import { Container } from './styles';

interface IProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: string) => void
}

const InputBox: React.FC<IProps> = (props:IProps) => {
  
  const {
    placeholder,
    type,
    value,
    onChange
  } = props

  return(
      <Container>
          <input type={type} placeholder={placeholder} required={true} value={value} onChange={e => onChange(e.target.value)} />
      </Container>
  );
}

export default InputBox;