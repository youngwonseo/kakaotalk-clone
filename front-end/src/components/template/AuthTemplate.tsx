import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const AuthTemplateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.theme};
  width: 100%;
  height: 100%;
`;

interface Props {};


const AuthTemplate : React.FC<Props> = ({ children }) => {
  return <AuthTemplateWrapper>{children}</AuthTemplateWrapper>;
}

export default AuthTemplate;