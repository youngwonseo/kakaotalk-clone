import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import ChatList from '../../components/chat/ChatList';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RootState, } from '../../modules';
import { loadChats, setChatId } from '../../modules/chat';
import { ModalContext } from '../../lib/createModalProvider';

import { CHAT_MODAL } from "../../lib/ModalContent";

interface Props {};


const ChatListContainer : React.FC<Props> = () => {

  const dispatch = useDispatch();
  const {
    chats,
    // selectFriendIdx,
  } = useSelector(
    (state: RootState) => ({
      chats: state.chat.chats,
    }),
    shallowEqual
  );


  useEffect(()=>{

    // 채팅방 목록 불러오기
    dispatch(loadChats.request());
    
  },[dispatch]);
  // const chats: [] = [];


  const { openModal, closeModal } = useContext(ModalContext);



  const handleOpenChat = (id: string) => {
    console.log(id);

    dispatch(setChatId(id));
    
    openModal(CHAT_MODAL);
  }


  return (
    <ChatList chats={chats} handleOpenChat={handleOpenChat}/>
  );
}

export default ChatListContainer;