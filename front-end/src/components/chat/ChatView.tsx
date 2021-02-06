import React, { useContext } from 'react';
import styled from 'styled-components';

import ChatItem from './ChatItem';
import { ModalContext } from "../../lib/createModalProvider";
import MessageTool from './message/MessageTool';
import MessageList from './message/MessageList';
import ChatHeader from './ChatHeader';


const ChatViewWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

interface Props {
  message: any;
  messages: any;
  handleChangeMessage: any;
  handleSendMessage: any;  
  handleCloseModal: any;
};


const ChatView: React.FC<Props> = ({
  message,
  messages,
  handleChangeMessage,
  handleSendMessage,
  handleCloseModal,
}) => {
  return (
    <ChatViewWrapper>
      <ChatHeader title="서영원" handleCloseModal={handleCloseModal} />
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