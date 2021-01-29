import React from 'react';
import styled from 'styled-components';
import Message from './Message';
// import { useMessages } from 'Hooks';

const MessageListWrapper = styled.div`
  /* display: flex; */
  /* flex-direction: column;
  justify-content: flex-end; */
  width: 100%;
  height: 100%;
  overflow: auto;
`;

interface Props {
  messages: any;
};


const MessageList: React.FC<Props> = ({ messages }) => {
  return (
    <MessageListWrapper>
      {messages && messages.map((message: any) => (
        <Message key={message._id} message={message} />
      ))}
    </MessageListWrapper>
  );
};

export default MessageList;