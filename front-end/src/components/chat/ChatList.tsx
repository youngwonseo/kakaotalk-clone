import React, { useContext } from 'react';
import styled from 'styled-components';

import ChatItem from './ChatItem';
import { ModalContext } from "../../lib/createModalProvider";

interface Props {
  chats: any[];
  handleOpenChat: any;
};


const ChatList : React.FC<Props> = ({ chats, handleOpenChat }) => {

  
  
  return (
    <>
      {chats.map((chat: any) => (
        <ChatItem key={chat._id} chat={chat} handleOpenChat={handleOpenChat} />
      ))}
    </>
  );
}

export default ChatList;