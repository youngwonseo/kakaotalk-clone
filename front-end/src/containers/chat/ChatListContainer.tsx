import React, { useEffect } from 'react';
import styled from 'styled-components';

import ChatList from '../../components/chat/ChatList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, } from '../../modules';
import { loadChats } from '../../modules/chat';


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


  

  return (
    <>
      <ChatList chats={chats} />
    </>
  );
}

export default ChatListContainer;