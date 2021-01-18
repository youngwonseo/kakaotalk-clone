import React from 'react';
import styled from 'styled-components';

const MessageListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

interface Props {};


const MessageList : React.FC<Props> = () => {
  return (<MessageListWrapper>Message</MessageListWrapper>);
}

export default MessageList;