import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import ChatModalTemplate from '../../components/template/ChatModalTemplate';
import ChatView from '../../components/chat/ChatView';

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

  return (
    <ChatModalTemplate>
      <ChatView />
    </ChatModalTemplate>
  );
}

export default ChatViewContainer;