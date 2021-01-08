import React from 'react';
import styled from 'styled-components';


const LoginFormWrapper = styled.div`
	padding: 0rem 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
`;

interface Props {};


const LoginForm : React.FC<Props> = () => {
  return (<LoginFormWrapper>Login Form</LoginFormWrapper>);
}

export default LoginForm;