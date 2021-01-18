import React, { useContext } from 'react';
import styled from 'styled-components';

import ChatItem from './ChatItem';
import { ModalContext } from "../../lib/createModalProvider";
import MessageTool from './message/MessageTool';
import MessageList from './message/MessageList';
import ChatHeader from './ChatHeader';


const ChatViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

interface Props {
  message: any;
  messages: any;
  handleChangeMessage: any;
  handleSendMessage: any;  
};


const ChatView: React.FC<Props> = ({
  message,
  messages,
  handleChangeMessage,
  handleSendMessage,
}) => {
  return (
    <ChatViewWrapper>
      <ChatHeader />
      <MessageList messages={messages} />
      <MessageTool
        message={message}
        handleChangeMessage={handleChangeMessage}
        handleSendMessage={handleSendMessage}
      />
    </ChatViewWrapper>
  );
};

export default ChatView;