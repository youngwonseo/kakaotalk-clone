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
  
};


const ChatView : React.FC<Props> = ({  }) => {

  
  
  return (
    <ChatViewWrapper>
      <ChatHeader/>
      <MessageList/>
      <MessageTool/>
    </ChatViewWrapper>
  );
}

export default ChatView;