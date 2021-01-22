import React from 'react';
import styled, { css } from 'styled-components';



interface InputElementProps {
  width?: any;
}

const InputElement = styled.input<InputElementProps>`
  padding: 8px;

  ${props => props.width && css`
    width : ${props.width};
  `}
`;

interface Props{
  name: string
  onChange: any;
  value: any;
  type: any;
  placeholder? :string;
  width?: string | number;
};



const Input: React.FC<Props> = ({ name, onChange, value, width, type, placeholder }) => {
  return (
    <InputElement type={type} name={name} onChange={onChange} width={width} value={value} placeholder={placeholder} />
  );
};

export default Input;