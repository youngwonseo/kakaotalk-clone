import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import ChatList from '../../components/chat/ChatList';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RootState, } from '../../modules';
import { loadChats, setChatId, searchChatByUser } from '../../modules/chat';
import { ModalContext } from '../../lib/createModalProvider';

import { CHAT_MODAL } from "../../lib/ModalContent";
import { loadProfile } from '../../modules/profile';

interface Props {};


const ChatListContainer : React.FC<Props> = () => {

  const dispatch = useDispatch();
  const {
    chats,
  } = useSelector(
    (state: RootState) => ({
      chats: state.chat.chats,
    }),
    shallowEqual
  );


  useEffect(()=>{
    // 추후 Main.ts에서 관리
    dispatch(loadProfile.request());
    dispatch(loadChats.request());
  },[dispatch]);



  const { openModal, closeModal } = useContext(ModalContext);


  
  const handleOpenChat = (id: string) => {
    dispatch(setChatId(id));
    openModal(CHAT_MODAL);
  }


  return <ChatList chats={chats} handleOpenChat={handleOpenChat} />;
}

export default ChatListContainer;