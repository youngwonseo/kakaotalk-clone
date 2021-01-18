import React from 'react';
import styled from 'styled-components';

const MessageToolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  left: 0px;
  bottom: 0px;
  border: 1px solid blue;
`;

interface Props {};


const MessageTool : React.FC<Props> = () => {
  return (<MessageToolWrapper><input type="text"/></MessageToolWrapper>);
}

export default MessageTool;