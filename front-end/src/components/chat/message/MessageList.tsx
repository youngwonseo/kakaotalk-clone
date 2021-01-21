import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const MessageListWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
`;

interface Props {
  messages: any;
};


const MessageList: React.FC<Props> = ({ messages }) => {
  return (
    <MessageListWrapper>
      {messages.map((message: any) => (
        <Message message={message} />
      ))}
    </MessageListWrapper>
  );
};

export default MessageList;