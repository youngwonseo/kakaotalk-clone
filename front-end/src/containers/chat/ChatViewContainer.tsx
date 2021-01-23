import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ChatModalTemplate from '../../components/template/ChatModalTemplate';
import ChatView from '../../components/chat/ChatView';
import { RootState } from '../../modules';
import { changeField, addMessage, registerChat, searchChatByUser, sendMessage } from '../../modules/chat';


// 모달에서 열림

interface Props {};


const ChatViewContainer : React.FC<Props> = () => {

  const dispatch = useDispatch();
  // 해당 채팅방 정보 가져오기
  // 서비스 워커
  // let socket : any = io("/");
  const [chatIdx, setChatIdx] = useState<number>(-1);
  const {
    // messages,
    // user
    profile,
    chat,
    chats,
    message,
    // messages,
    following,
  } = useSelector((state: RootState) => ({
    profile: state.profile.profile,
    chat: state.chat.chat,
    chats: state.chat.chats, 
    message: state.chat.message,
    // messages: state.chat.messages,
    following: state.profile.following,
  }), shallowEqual);

  useEffect(() => {
    
    if (chat && chats) {
      const idx = chats.findIndex((_chat: any) => {
        // console.log(chat._id, chat;)
        return _chat._id === chat;
      });
      console.log(idx);
      setChatIdx(idx);
    } else if (following) {
      // 기존 채팅이 있는지 검색
      dispatch(searchChatByUser.request({ userid: following }));
    }



  }, [dispatch]);

  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ key: name, value }));
  }


  // 소켓?
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();



    // 선택된 채팅방 아이디가 없으면 채팅방 추가
    if (!chat) {
      dispatch(registerChat.request({ users : [following], message}));
    }else{
      // console.log('send message!');
      dispatch(sendMessage({chat: chat, user: profile._id, message: message}));
    }


    // console.log(message);
    // socket.emit("toServer", message);
  }

  // 페이징으로 메세지 가져오기
  const handleGetMessages = () => {

  }

  return (
    <ChatModalTemplate>
      <ChatView
        message={message}
        messages={chats && chats[chatIdx] && chats[chatIdx].messages}
        handleChangeMessage={handleChangeMessage}
        handleSendMessage={handleSendMessage}
      />
    </ChatModalTemplate>
  );
}

export default ChatViewContainer;