import React from 'react';
import ChatTemplate from '../../components/chat/ChatTemplate';
import { useDispatch, useSelector } from 'react-redux';

// 모달에서 열림

interface Props {};


const ChatViewContainer : React.FC<Props> = () => {

  const dispatch = useDispatch();
  // 해당 채팅방 정보 가져오기

  const {
    // messages,
    // user
  } = useSelector(({ chat }: { chat: any }) => ({
    // form: chat.login,
    // auth: auth.auth,
    // authError: auth.authError,
    // user: user.user
  }));



  const handleWriteMessage = () => {

  }

  // 페이징으로 메세지 가져오기
  const handleGetMessages = () => {

  }

  return <ChatTemplate title={"서영원"}></ChatTemplate>;
}

export default ChatViewContainer;