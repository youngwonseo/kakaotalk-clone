import React from 'react';
import styled from 'styled-components';


const ChatHeaderWrapper = styled.div`
  display: flex;
  height: 60px;
  border: 1px solid red;
`;

const ChatHeader: React.FC = () => {  
  return <ChatHeaderWrapper>Header</ChatHeaderWrapper>;
}

export default ChatHeader;