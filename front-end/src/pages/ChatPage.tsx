import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import UserTemplate from '../components/template/UserTemplate';
import ChatListContainer from '../containers/chat/ChatListContainer';

interface Props {};


const ChatPage : React.FC<Props> = () => {

  
  return (
    <UserTemplate>
      <ChatListContainer />
    </UserTemplate>
  );
}

export default ChatPage;