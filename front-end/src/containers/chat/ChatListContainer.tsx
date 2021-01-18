import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import ChatList from '../../components/chat/ChatList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, } from '../../modules';
import { loadChats } from '../../modules/chat';
import { ModalContext } from '../../lib/createModalProvider';


interface Props {};


const ChatListContainer : React.FC<Props> = () => {

  const dispatch = useDispatch();
  const {
    chats,
    // selectFriendIdx,
  } = useSelector(
    (state: RootState) => ({
      chats: state.chat.chats,
    })
  );


  useEffect(()=>{
    dispatch(loadChats.request());
  },[dispatch]);
  // const chats: [] = [];


  const { openModal, closeModal } = useContext(ModalContext);



  const handleOpenChat = (id: string) => {
    console.log(id);
    openModal();
  }


  return (
    <ChatList chats={chats} handleOpenChat={handleOpenChat}/>
  );
}

export default ChatListContainer;