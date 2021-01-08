import React from 'react';
import styled from 'styled-components';

const AuthTemplateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {};


const AuthTemplate : React.FC<Props> = ({ children }) => {
  return <AuthTemplateWrapper>{children}</AuthTemplateWrapper>;
}

export default AuthTemplate;