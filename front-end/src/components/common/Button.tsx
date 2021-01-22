import React from 'react';
import styled, {css} from 'styled-components';
import palette from '../../lib/styles/palette';



interface ButtonElementProps {
  width?: any;
}

const ButtonElement = styled.button<ButtonElementProps>`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: ${palette.button};
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    /* background: #38d9a9; */
  }
  &:active {
    /* background: #12b886; */
  }


  ${props => props.width && css`
    width : ${props.width};
  `}
`;

interface Props {
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  // theme: 'primary' | 'secondary' | 'tertiary';
  /** 버튼의 크기를 설정합니다 */
  // size: 'small' | 'medium' | 'big';
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;

  width?: string | number;
}

const Button: React.FC<Props> = ({ onClick, disabled, width, children }) => {
  return (
    <ButtonElement onClick={onClick} disabled={disabled} width={width}>{children}</ButtonElement>
  );
};


export default Button;