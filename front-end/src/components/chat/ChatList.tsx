import React, { useContext } from 'react';
import styled from 'styled-components';

import ChatItem from './ChatItem';
import { ModalContext } from "../../lib/createModalProvider";

interface Props {
  chats: any[];
};


const ChatList : React.FC<Props> = ({ chats }) => {

  const { openModal, closeModal } = useContext(ModalContext);
  
  return (
    <>
      {chats.map((chat: any) => (
        <div onClick={openModal}>
          <ChatItem key={chat.idx} chat={chat} />
        </div>
      ))}
    </>
  );
}

export default ChatList;