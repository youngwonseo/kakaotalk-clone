import React, { useContext } from 'react';
import styled from 'styled-components';

import ChatItem from './ChatItem';
import { ModalContext } from "../../lib/createModalProvider";



const ChatListWrapper = styled.div`
  display: flex;
  height: 100%;
`;


interface Props {
  chats: any[];
  handleOpenChat: any;
};


const ChatList : React.FC<Props> = ({ chats, handleOpenChat }) => {

  
  
  return (
    <ChatListWrapper>
      {chats.map((chat: any) => (
        <ChatItem key={chat._id} chat={chat} handleOpenChat={handleOpenChat} />
      ))}
    </ChatListWrapper>
  );
}

export default ChatList;